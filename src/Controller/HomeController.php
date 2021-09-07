<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    public $projects;


    public function __construct(ProjectRepository $proRep)
    {
        $activeProjects = $proRep->findAllActive();
        if($activeProjects){
            $activeProjectsNumber = sizeof($activeProjects);
            $this->projects = ["active" => $activeProjects, "activeNumber" =>$activeProjectsNumber];
        }
        

    }
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->redirectToRoute('home');
    }

    /**
     * @Route("/home", name="home")
     */
    public function home(): Response
    {
        return $this->render('home/index.html.twig', [
            'projects' => $this->projects
        ]);
    }
}
