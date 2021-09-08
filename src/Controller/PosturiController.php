<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PosturiController extends HomeController
{
    /**
     * @Route("/posturi", name="posturi")
     */
    public function post(PostRepository $postRep): Response
    {
        $postsI = $postRep->findAllImportant();
        $posts = $postRep->findAllNormal();

        return $this->render('posturi/index.html.twig', [
            'projects' => $this->projects,
            'postsI' => $postsI,
            'posts' => $posts,
        ]);
    }
}
