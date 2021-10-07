<?php

namespace App\Controller\Admin\Settings;

use App\Controller\Admin\MainController;
use App\Entity\User;
use App\Form\UserChangePasswordType;
use App\Form\UserType;
use App\Repository\GlobalsettingsRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class SettingsController extends MainController
{

    /**
     * @Route("/admin/settings", name="settings", methods={"GET"})
   
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_SUPERADMIN')", statusCode=403)
     */
    public function index(UserRepository $userRepository, Request $request): Response
    {
        //  * @IsGranted("ROLE_SUPERADMIN" or "ROLE_ADMIN", statusCode=403, message="Acces neautorizat!")

        $usersKnp = $this->paginator->paginate(
            $userRepository->findAllQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/settings/index.html.twig', [
            'usersKnp' => $usersKnp
        ]);
    }

    /**
     * @Route("/admin/settings", name="settings_global", methods={"GET"})
   
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_SUPERADMIN')", statusCode=403)
     */
    public function global_settings(UserRepository $userRepository, Request $request): Response
    {

        $usersKnp = $this->paginator->paginate(
            $userRepository->findAllQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/settings/index.html.twig', [
            'usersKnp' => $usersKnp
        ]);
    }


    /**
     * @Route("/admin/settings/{id}", name="settings_id")
     */
    public function settings_id(User $user, Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        //redirect if the request it's for another user
        if($user->getId() != $this->getUser()->getId()){
            $message = "Acces neautorizat";
            $this->addFlash('alert', $message);

            return $this->redirectToRoute('admin');
        }
        

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $file = $form->get('photo')->getData();
            if($file){
                $originalName = $file->getClientOriginalName();
                //check extension validation
                $ext = $user->checkValidExtension($originalName);
                if($ext){
                    $filename = md5(uniqid()). '.' . $ext;
                    $uploads_directory = $this->getParameter('uploads_directory') . "users/";
                    $file->move(
                        $uploads_directory,
                        $filename
                    );
                    $user->setDocument($filename);
                }
                else {
                    $message = "Tipul pozei nu este acceptat!";
                    $this->addFlash('alert', $message);
                }
            }
            

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            
            $message = "Modificari ale utilizatorului cu succes";
            $this->addFlash('success', $message);
         
            $entityManager->flush();

            return $this->redirectToRoute('settings_id', ['id'=> $user->getId()]);
        }

        $formPass = $this->createForm(UserChangePasswordType::class, $user);
        $formPass->handleRequest($request);
        if ($formPass->isSubmitted() && $formPass->isValid()) {
            $pass = $passwordEncoder->encodePassword($user, $formPass->get('plainPassword')->getData());
            $user->setPassword($pass);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            dump($user->getPassword());
            $message = "Modificari ale utilizatorului cu succes";
            $this->addFlash('success', $message);
         
            $entityManager->flush();

            return $this->redirectToRoute('settings_id', ['id'=> $user->getId()]);
        }



        return $this->render('admin/settings/id.html.twig', [
            'user' => $user,
           'form' => $form->createView(),
           'formPass' => $formPass->createView()
        ]);
    }

    
}
