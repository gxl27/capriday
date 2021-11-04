<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\Photo;
use App\Entity\User;
use App\Repository\GalleryRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

/**
 * @Route("/api")
 */
class ApiController extends BaseHomeController
{


    /**
     * @Route("/admin/project-finish/{id}", name="api_project_finish", methods={"POST"})
     */

    public function projectFinish(Project $project): Response
    {
        $project->setStatus(1);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($project);
        $this->getDoctrine()->getManager()->flush();   
        return new Response('success', $status = 200);   
    }

    /**
     * @Route("/admin/project-inactive/{id}", name="api_project_inactive", methods={"POST"})
     */
    public function projectInactive(Project $project): Response
    {
        $project->setStatus(2);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($project);
        $this->getDoctrine()->getManager()->flush();   

        return new Response('success', $status = 200);   
    }

    /**
     * @Route("/admin/project-active/{id}", name="api_project_active", methods={"POST"})
     */
    public function projectActive(Project $project): Response
    {
        $project->setStatus(0);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($project);
        $this->getDoctrine()->getManager()->flush();   
        return new Response('success', $status = 200);   
    }

    /**
     * @Route("/admin/profile-picture/{id}", name="api_profile_picture", methods={"POST"})
     */
    public function profilePicture(Photo $photo, GalleryRepository $galleryRep): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        if(!$photo->getProfile()){
            $galleryId = $photo->getGallery()->getId();
            $gallery = $galleryRep->findOneBy(['id' => $galleryId]);
            $photos = $gallery->getPhotos();
            if($photos){
                for($i=0; $i<sizeof($photos); $i++){
                    $photos[$i]->setProfile(NULL);
                    $entityManager->persist($photos[$i]);
                }
            }
            $photo->setProfile(1);
        }else{
            $photo->setProfile(NULL);
        }
        
        
        $entityManager->persist($photo);
        $this->getDoctrine()->getManager()->flush();   
        
        return new Response('success', $status = 200);   
    }

    /**
     * @Route("/admin/settings/{id}/delete", name="api_user_delete", methods={"POST"})
     * @Security("is_granted('ROLE_SUPERADMIN')", statusCode=403)
     */
    public function userDelete(User $id, Request $request)
    {

        if($this->getUser()->getRolesFormat() == "ROLE_USER"){
            $message = "Access neautorizat";
            $this->addFlash('alert', $message);
            return $this->redirect($request->headers->get('referer'));
        }

        $entityManager = $this->getDoctrine()->getManager();
       

        $entityManager->remove($id);
        $entityManager->flush();

        $message = "Cont sters cu success";
        $this->addFlash('success', $message);

        return $this->redirect($request->headers->get('referer'));
    
    }

    /**
     * @Route("/admin/settings/{id}/photo/delete", name="api_settings_picture_delete", methods={"POST"})
     */
    public function settingsPhotoDelete(User $user, Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        if($user->getDocument()){
            $user->setDocument(NULL);
            $entityManager->persist($user);
            $this->getDoctrine()->getManager()->flush();   
        }
        
        return $this->redirect($request->headers->get('referer')); 
    }

    
}
