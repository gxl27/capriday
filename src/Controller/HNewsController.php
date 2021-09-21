<?php

namespace App\Controller;

use App\Repository\NewsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HNewsController extends HomeController
{
    /**
     * @Route("/news", name="hnews")
     */
    public function news(NewsRepository $newsRepository, Request $request): Response
    {
        $newsI = $newsRepository->findAllStatus(1);
        $newsKnp = $this->paginator->paginate(
            $newsRepository->findAllStatusQuery(0),
            $request->query->getInt('page', 1),
                2);

        return $this->render('hnews/index.html.twig', [
            'projects' => $this->projects,
            'newsI' => $newsI,
            'newsKnp' => $newsKnp,
        ]);
    }
}
