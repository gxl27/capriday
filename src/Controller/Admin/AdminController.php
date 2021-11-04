<?php

namespace App\Controller\Admin;

use App\Controller\BaseAdminController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends BaseAdminController
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
