<?php

namespace App\Controller;

use App\Entity\Gallery;
use App\Repository\GalleryRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HGalleryController extends HomeController
{
    /**
     * @Route("/gallery", name="hgallery")
     */
    public function gallery(Request $request, GalleryRepository $galleryRepository): Response
    {
        $galleryKnp = $this->paginator->paginate(
            $galleryRepository->findAllStatusQuery(0),
            $request->query->getInt('page', 1),
                7);

        return $this->render('hgallery/index.html.twig', [
            'galleryKnp' => $galleryKnp,
        ]);
    }

    /**
     * @Route("/gallery/{id}", name="hgallery_show", methods={"GET", "POST"})
     */
    public function hgallery_show(Gallery $gallery): Response
    {

        return $this->render('hgallery/show.html.twig', [
            'gallery' => $gallery,
        ]);
    }
}
