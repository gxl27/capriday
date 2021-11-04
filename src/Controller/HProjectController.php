<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HProjectController extends BaseHomeController
{
    /**
     * @Route("/project", name="hproject")
     */
    public function projects(ProjectRepository $projectRepository, Request $request): Response
    {
        dump($this->paginator);

        $projectsKnp = $this->paginator->paginate(
            $projectRepository->findAllActiveQuery(),
            $request->query->getInt('page', 1),
                6);
        
        return $this->render('hproject/index.html.twig', [
            'projectsKnp' => $projectsKnp
   
        ]);
    }
}
