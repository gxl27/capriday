<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Knp\Component\Pager\PaginatorInterface;

class MainController extends AbstractController
{
   
    public $paginator;

    public function __construct(PaginatorInterface $paginator)
    {
        
        $this->paginator = $paginator;
    }
}
