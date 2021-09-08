<?php

namespace App\Controller;

use App\Repository\NewsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NewsuriController extends HomeController
{
    /**
     * @Route("/news", name="newsuri")
     */
    public function news(NewsRepository $newsRep): Response
    {
        $newsI = $newsRep->findAllImportant();
        $news = $newsRep->findAllNormal();

        return $this->render('newsuri/index.html.twig', [
            'projects' => $this->projects,
            'newsI' => $newsI,
            'news' => $news,
        ]);
    }
}
