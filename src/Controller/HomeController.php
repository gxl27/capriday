<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;


class HomeController extends AbstractController
{
    public $projects;

    public function __construct(ProjectRepository $proRep, PaginatorInterface $paginator)
    {
        // get all projects for navbar
        $this->projects = $proRep->findAllActive();

        $this->paginator = $paginator;
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
