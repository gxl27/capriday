<?php

namespace App\Controller\Admin\Uploads;

use App\Repository\PhotoRepository;
use App\Repository\PostfilesRepository;
use App\Repository\ProjectfilesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

/**
 * @Route("/admin/uploads")
 */
class UploadsController extends AbstractController
{
    /**
     * @Route("/{entity}/{doc}", name="uploads_entities")
     */
    public function uploads($entity, $doc, Request $request)
    {

        $fileuri = "uploads/$entity/$doc";
        if(file_exists($fileuri)){
            // $response = new BinaryFileResponse($fileuri);
            // $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);
            // return $response;

            // Generate response
            $response = new Response();

            // Set headers
            $response->headers->set('Cache-Control', 'private');
            $response->headers->set('Content-type', mime_content_type($fileuri));
            $response->headers->set('Content-Disposition', 'attachment; filename="' . basename($fileuri) . '";');
            $response->headers->set('Content-length', filesize($fileuri));

            // Send headers before outputting anything
            $response->sendHeaders();

            $response->setContent(file_get_contents($fileuri));

            

            return $response;
        }

        $message = "File does not exist!";
        $this->addFlash('alert', $message);

        return $this->redirect($request->headers->get('referer'));
       
    
    }

    /**
     * @Route("/{entity}/{doc}/delete", name="delete_entities")
     */
    public function delete($entity, $doc, Request $request, ProjectfilesRepository $projectfilesRep, PostfilesRepository $postfilesRep, PhotoRepository $photosRep)
    {

        $fileuri = "uploads/$entity/$doc";
        if(file_exists($fileuri)){
            $rep = $entity."Rep";
            $id = ${$rep}->findOneBy(["document" => $doc]);
            if ($this->isCsrfTokenValid('delete'.$id->getDocument(), $request->request->get('_token'))) {
                $entityManager = $this->getDoctrine()->getManager();

                $entityManager->remove($id);
                $entityManager->flush();

                $message = "File successfully deleted!";
                $this->addFlash('success', $message);

                return $this->redirect($request->headers->get('referer'));
                
            }
        }
        $message = "File does not exist!";
        $this->addFlash('alert', $message);

        return $this->redirect($request->headers->get('referer'));
       
    
    }
}
