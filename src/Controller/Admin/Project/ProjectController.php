<?php

namespace App\Controller\Admin\Project;


use App\Entity\Project;
use App\Entity\Projectfiles;
use App\Form\ProjectType;
use App\Form\ProjectfileType;
use App\Repository\ProjectRepository;
use App\Controller\BaseAdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\FileBag;


/**
 * @Route("/admin/project")
 */
class ProjectController extends BaseAdminController
{
    /**
     * @Route("/", name="project_index", methods={"GET"})
     */
    public function index(ProjectRepository $projectRepository, Request $request): Response
    {

        $projectsKnp = $this->paginator->paginate(
            $projectRepository->findAllQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/project/index.html.twig', [
            'projectsKnp' => $projectsKnp
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
     * @Route("/{id}", name="project_show", methods={"GET","POST"})
     */
    public function show(Project $project, Request $request): Response
    {
        $projectfile = new Projectfiles();
        $projectfile->setProject($project);
        $pfForm = $this->createForm(ProjectfileType::class, $projectfile);
        $pfForm->handleRequest($request);
        
        if ($pfForm->isSubmitted() && $pfForm->isValid()) {
            //get file from the form
            $file = $pfForm->get('projectfilesFiles')->getData();
            $originalName = $file->getClientOriginalName();
            //check extension validation
            $ext = $projectfile->checkValidExtension($originalName);
            if($ext){
                $filename = md5(uniqid()). '.' . $ext;
                $uploads_directory = $this->getParameter('uploads_directory') . "projectfiles/";
                $file->move(
                    $uploads_directory,
                    $filename
                );
              
                $projectfile->setDocument($filename);
                $projectfile->setName($originalName);
                $project->addProjectfile($projectfile);
    
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($project);
                $entityManager->flush();

                $message = "Fisier adaugat cu success";
                $this->addFlash('success', $message);

                return $this->redirect($request->headers->get('referer'));
                ///////////////////////////////////////////////
                // de rezolvat si api delete pt posts si gallery
       
            }
          
            else {
                $message = "Tipul fisierului nu este acceptat!";
                $this->addFlash('alert', $message);
                return $this->redirect($request->headers->get('referer'));
            }
        }
        
        return $this->render('admin/project/show.html.twig', [
            'project' => $project,
            'pfForm' => $pfForm->createView()
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

            // return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/edit.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
            'formProjectfiles' => $formProjectfiles->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="project_delete", methods={"POST"})
     */
    public function delete(Request $request, Project $project): Response
    {
        
        if ($this->isCsrfTokenValid('delete'.$project->getId(), $request->request->get('_token'))) {
            
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($project);
            $entityManager->flush();
        }

        return $this->redirectToRoute('project_index');
    }
}
