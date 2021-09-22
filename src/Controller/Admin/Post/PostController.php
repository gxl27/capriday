<?php

namespace App\Controller\Admin\Post;

use App\Entity\Post;
use App\Entity\PostFiles;
use App\Form\PostType;
use App\Form\PostfileType;
use App\Repository\PostRepository;
use App\Controller\Admin\MainController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/post")
 */
class PostController extends MainController
{
    /**
     * @Route("/", name="post_index", methods={"GET"})
     */
    public function index(PostRepository $postRepository, Request $request): Response
    {

        $postsKnp = $this->paginator->paginate(
            $postRepository->findAllStatusQuery(),
            $request->query->getInt('page', 1),
                7);

        return $this->render('admin/post/index.html.twig', [
            'postsKnp' => $postsKnp
        ]);
    }

    /**
     * @Route("/new", name="post_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $post = new Post();
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $post->setCreatedBy($this->getUser()->getUsername());
            $entityManager = $this->getDoctrine()->getManager();
            $message = "Anunt adaugat cu succes";
            $this->addFlash('success', $message);

            $entityManager->persist($post);
            $entityManager->flush();

            return $this->redirectToRoute('post_index');
        }

        return $this->render('admin/post/new.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="post_show", methods={"GET", "POST"})
     */
    public function show(Post $post, Request $request): Response
    {

        $postfile = new Postfiles();
        $postfile->setPost($post);
        $pfForm = $this->createForm(PostfileType::class, $postfile);
        $pfForm->handleRequest($request);
        
        if ($pfForm->isSubmitted() && $pfForm->isValid()) {
            //get file from the form
            $file = $pfForm->get('postfilesFiles')->getData();
            $originalName = $file->getClientOriginalName();
            //check extension validation
            $ext = $postfile->checkValidExtension($originalName);
            if($ext){
                $filename = md5(uniqid()). '.' . $ext;
                $uploads_directory = $this->getParameter('uploads_directory') . "postfiles";
                $file->move(
                    $uploads_directory,
                    $filename
                );
              
                $postfile->setDocument($filename);
                $postfile->setName($originalName);
                $post->addPostfile($postfile);
    
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($post);
                $entityManager->flush();

                $message = "Fisier adaugat cu success";
                $this->addFlash('success', $message);

                return $this->redirect($request->headers->get('referer'));
               
            }
          
            else {
                $message = "Tipul fisierului nu este acceptat!";
                $this->addFlash('alert', $message);
                
                return $this->redirect($request->headers->get('referer'));
            }
        }

        return $this->render('admin/post/show.html.twig', [
            'post' => $post,
            'pfForm' => $pfForm->createView()
        ]);
    }

    /**
     * @Route("/{id}/edit", name="post_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Post $post): Response
    {
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('post_index');
        }

        return $this->render('admin/post/edit.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="post_delete", methods={"POST"})
     */
    public function delete(Request $request, Post $post): Response
    {
        if ($this->isCsrfTokenValid('delete'.$post->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($post);
            $entityManager->flush();
        }

        return $this->redirectToRoute('post_index');
    }
}
