<?php

namespace App\Controller;


use App\Entity\Contactmsg;
use App\Entity\Globalsettings;
use App\Form\ContactmsgType;
use App\Repository\GlobalsettingsRepository;
use PhpParser\Node\Stmt\TryCatch;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email as PHPEmail;

class ContactController extends HomeController
{


    /**
     * @Route("/contact", name="contact")
     */
    public function contact(Request $request, MailerInterface $mailer, GlobalsettingsRepository $gsRep): Response
    {
        //get global settings for the website email adress
        $gs = $this->gsRep->getActiveGs();

        $contactmsg = new Contactmsg();
        $formContactmsg = $this->createForm(ContactmsgType::class, $contactmsg, 
        ['antispam_time'=> true,
        'antispam_time_min' => 5,
        'antispam_time_max' => 3600,
        'antispam_honeypot' => true,
        'antispam_honeypot_class' => 'none',
        'antispam_honeypot_field' => 'contact-repeat',
        ]);
        
        $formContactmsg->handleRequest($request);

        if ($formContactmsg->isSubmitted() && $formContactmsg->isValid()) 
        {   
            $this->initializeEmail($contactmsg, $gs);

            $message = "Mesajul a fost trimis!";
            $this->addFlash('success', $message);

            dump($contactmsg);
        }else{
            $message = "Mesajul nu poate fi trimis!";
            $this->addFlash('alert', $message);
        }

        return $this->render('contact/index.html.twig', [
            'projects' => $this->projects,
            'formContactmsg' => $formContactmsg->createView()
        ]);
    }

    private function initializeEmail($contactmsg, $gs){
        $to = $gs->getEmail();
        $name = $contactmsg->getName();
        $subject = "Mesaj contact: $name";
        $content =  $contactmsg->getSubject();
        $textmail = "<h1>".(new \DateTime('now'))->format('d-m-Y h:i')."</h1>";
        $htmlmail = "<div>".$textmail. "<p>". $content . "</p>". "</div>";
        $email = (new PHPEmail())
        ->from('caprirom@lucianturlea.ro')
        ->to($to)
        //->cc('cc@example.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject($subject)
        ->text($textmail)
        ->html($htmlmail);
        // ->attach($dompdf->output(), $pdfname);
        $this->mailer->send($email);
    }
}
