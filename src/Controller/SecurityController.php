<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
      
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        // the logout route it's set to redirrect to the logout_message
        // to display the flash message if the account expired via cookies

        // throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("/logout_message", name="app_logout_message")
     */
    public function logout_message(Request $request)
    {
        // logout route to display the info about the expired accounts.
        // it redirrects to login route

        $resp = $this->redirectToRoute('app_login');

        // if there are any cookies with messages, display the flash message
        //  and destroy the cookies
        if($request->cookies->has('exp')){
            $exp = $request->cookies->get('exp');
            $username = $request->cookies->get('username');
            $this->addFlash('alert', "Contul $username a expirat la data $exp");
            $resp->headers->clearCookie('exp');
            $resp->headers->clearCookie('username');
        }
        
        return $resp;
    }
}
