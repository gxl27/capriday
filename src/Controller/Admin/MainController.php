<?php

namespace App\Controller\Admin;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Knp\Component\Pager\PaginatorInterface;

class MainController extends AbstractController
{
   
    public $paginator;

    public function __construct(ProjectRepository $proRep, PaginatorInterface $paginator)
    {
        
        $this->paginator = $paginator;
    }
}
