<?php

namespace App\Controller;

use App\Entity\Project;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiController extends AbstractController
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
}
