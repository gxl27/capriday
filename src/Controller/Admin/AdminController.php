<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends MainController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {

        return $this->render('admin/index.html.twig', [
            
        ]);
    }
}
