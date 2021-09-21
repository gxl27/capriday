<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HPostController extends HomeController
{
    /**
     * @Route("/post", name="hpost")
     */
    public function post(PostRepository $postRepository, Request $request): Response
    {
        
        $postsI = $postRepository->findAllStatus(1);
        $postsKnp = $this->paginator->paginate(
            $postRepository->findAllStatusQuery(0),
            $request->query->getInt('page', 1),
                2);
          
        return $this->render('hpost/index.html.twig', [
            'projects' => $this->projects,
            'postsI' => $postsI,
            'postsKnp' => $postsKnp,
        ]);
    }
}
