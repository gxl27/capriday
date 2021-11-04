<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use App\Service\Globalsettings;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;


class HomeController extends BaseHomeController
{

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
