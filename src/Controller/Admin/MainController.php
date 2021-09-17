<?php

namespace App\Controller\Admin;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Knp\Component\Pager\PaginatorInterface;

class MainController extends AbstractController
{
    public $projects;
    public $paginator;
    public $request;

    public function __construct(ProjectRepository $proRep, PaginatorInterface $paginator)
    {
        $activeProjects = $proRep->findAllActive();
        if($activeProjects){
            $activeProjectsNumber = sizeof($activeProjects);
            $this->projects = ["active" => $activeProjects, "activeNumber" =>$activeProjectsNumber];
        }
        $this->paginator = $paginator;
    }
}
