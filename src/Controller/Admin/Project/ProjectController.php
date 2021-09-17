<?php

namespace App\Controller\Admin\Project;


use App\Entity\Project;
use App\Entity\Projectfiles;
use App\Form\ProjectType;
use App\Form\ProjectfileType;
use App\Repository\ProjectRepository;
use App\Controller\Admin\MainController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/admin/project")
 */
class ProjectController extends MainController
{
    /**
     * @Route("/", name="project_index", methods={"GET"})
     */
    public function index(ProjectRepository $projectRepository, Request $request): Response
    {

        $projects = $this->paginator->paginate(
            $projectRepository->findAllQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/project/index.html.twig', [
            'projects' => $projects
        ]);
    }

    /**
     * @Route("/new", name="project_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $project = new Project();
        $project->setCreatedBy($this->getUser()->getUsername());
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($project);
            
            $message = "Proiect adaugat cu succes";
            $this->addFlash('success', $message);
         
            $entityManager->flush();

            return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/new.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="project_show", methods={"GET"})
     */
    public function show(Project $project): Response
    {
        return $this->render('admin/project/show.html.twig', [
            'project' => $project,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="project_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Project $project): Response
    {
        $projectfile = new Projectfiles();
        $projectfile->setProject($project);

        $formProjectfiles =  $this->createForm(ProjectfileType::class, $projectfile);
        $formProjectfiles->handleRequest($request);

        if ($formProjectfiles->isSubmitted() && $formProjectfiles->isValid()) {
            $this->getDoctrine()->getManager()->flush();

        }
        
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/edit.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
            'formProjectfiles' => $formProjectfiles->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="project_delete", methods={"POST"})
     */
    public function delete(Request $request, Project $project): Response
    {
        if ($this->isCsrfTokenValid('delete'.$project->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($project);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_project_index');
    }
}
