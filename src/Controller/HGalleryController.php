<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HGalleryController extends HomeController
{
    /**
     * @Route("/gallery", name="hgallery")
     */
    public function gallery(): Response
    {
        return $this->render('hgallery/index.html.twig', [
            'projects' => $this->projects,
        ]);
    }
}
