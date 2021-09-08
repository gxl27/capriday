<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GaleriiController extends HomeController
{
    /**
     * @Route("/galerii", name="galerii")
     */
    public function galerii(): Response
    {
        return $this->render('galerii/index.html.twig', [
            'projects' => $this->projects,
        ]);
    }
}
