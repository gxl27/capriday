<?php

namespace App\Controller\Admin\Gallery;

use App\Entity\Gallery;
use App\Entity\Photo;
use App\Form\GalleryType;
use App\Form\PhotoType;
use App\Repository\GalleryRepository;
use App\Controller\BaseAdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/gallery")
 */
class GalleryController extends BaseAdminController
{
    /**
     * @Route("/", name="gallery_index", methods={"GET"})
     */
    public function index(GalleryRepository $galleryRepository, Request $request): Response
    {
        $galleryKnp = $this->paginator->paginate(
            $galleryRepository->findAllStatusQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/gallery/index.html.twig', [
            'galleryKnp' => $galleryKnp,
        ]);
    }

    /**
     * @Route("/new", name="gallery_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $gallery = new Gallery();
        $form = $this->createForm(GalleryType::class, $gallery);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($gallery);
            $entityManager->flush();

            $message = "Album added successfully!";
            $this->addFlash('success', $message);

            return $this->redirectToRoute('gallery_index');
        }

        return $this->render('admin/gallery/new.html.twig', [
            'gallery' => $gallery,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="gallery_show", methods={"GET", "POST"})
     */
    public function show(Gallery $gallery, Request $request): Response
    {
        $photo = new Photo();
        $photo->setGallery($gallery);
        $photoForm = $this->createForm(PhotoType::class, $photo);
        $photoForm->handleRequest($request);
        
        if ($photoForm->isSubmitted() && $photoForm->isValid()) {
            //get file from the form
            $file = $photoForm->get('photo')->getData();
            $originalName = $file->getClientOriginalName();
            //check extension validation
            $ext = $photo->checkValidExtension($originalName);
            if($ext){
                $filename = md5(uniqid()). '.' . $ext;
                $uploads_directory = $this->getParameter('uploads_directory') . "photos/";
                $file->move(
                    $uploads_directory,
                    $filename
                );
              
                $photo->setDocument($filename);
                $photo->setName($originalName);
                $gallery->addPhoto($photo);
    
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($gallery);
                $entityManager->flush();
               
                $message = "Photo successfully added!";
                $this->addFlash('success', $message);

                return $this->redirect($request->headers->get('referer'));
            }
          
            else {
                $message = "File type not supported!";
                $this->addFlash('alert', $message);
            }
        }

        return $this->render('admin/gallery/show.html.twig', [
            'gallery' => $gallery,
            'photoForm' => $photoForm->createView()
        ]);
    }

    /**
     * @Route("/{id}/edit", name="gallery_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Gallery $gallery): Response
    {
        $form = $this->createForm(GalleryType::class, $gallery);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('gallery_index');
        }

        return $this->render('admin/gallery/edit.html.twig', [
            'gallery' => $gallery,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="gallery_delete", methods={"POST"})
     */
    public function delete(Request $request, Gallery $gallery): Response
    {
        if ($this->isCsrfTokenValid('delete'.$gallery->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($gallery);
            $entityManager->flush();
        }

        return $this->redirectToRoute('gallery_index');
    }
}
