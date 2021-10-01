<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TermsController extends HomeController
{
    /**
     * @Route("/terms", name="terms")
     */
    public function terms(): Response
    {
        
          
        return $this->render('terms/index.html.twig', [
            'projects' => $this->projects,
        ]);
    }
}
