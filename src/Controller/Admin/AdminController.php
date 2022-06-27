<?php

namespace App\Controller\Admin;

use App\Repository\ProjectRepository;
use App\Repository\PostRepository;
use App\Repository\NewsRepository;
use App\Repository\GalleryRepository;

use App\Controller\BaseAdminController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends BaseAdminController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(ProjectRepository $projectRepository, PostRepository $postRepository, NewsRepository $newsRepository, GalleryRepository $galleryRepository): Response
    {

        $projects = $projectRepository->findAll();
        $posts = $postRepository->findAll();
        $news = $newsRepository->findAll();
        $galleries = $galleryRepository->findAll();

        return $this->render('admin/index.html.twig', [
            'projects' => $projects,
            'posts' => $posts,
            'news' => $news,
            'galleries' => $galleries
        ]);
    }
}
