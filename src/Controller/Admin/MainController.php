<?php

namespace App\Controller\Admin;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class MainController extends AbstractController
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
}
