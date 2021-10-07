<?php

namespace App\Controller;

use App\Entity\Globalsettings;
use App\Repository\ProjectRepository;
use App\Service\Globalsettings as Gs;
use App\Service\Globalsettings as ServiceGlobalsettings;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;


class HomeController extends AbstractController
{
    public $projects;

    public function __construct(PaginatorInterface $paginator, ServiceGlobalsettings $gs)
    {
        // get all projects for navbar
        

        $this->paginator = $paginator;

        // $this->gs = $gs;
        $this->as = $gs->getAs();
        $this->hs = $gs->getHs();
     
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

        ]);
    }
}
