<?php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjecteController extends HomeController
{
    /**
     * @Route("/project", name="projecte")
     */
    public function index(): Response
    {

        
        return $this->render('project/index.html.twig', [
            'projects' => $this->projects,
   
        ]);
    }
}
