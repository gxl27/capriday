<?php

namespace App\Controller\Admin\Settings;

use App\Controller\Admin\MainController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SettingsController extends MainController
{
    /**
     * @Route("/admin/settings", name="settings")
     */
    public function index(): Response
    {
        return $this->render('admin/settings/index.html.twig', [
           
        ]);
    }
}
