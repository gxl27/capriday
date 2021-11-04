<?php

namespace App\Controller;

use App\Service\Globalsettings;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Knp\Component\Pager\PaginatorInterface;


class BaseAdminController extends AbstractController
{
    // set global settings, admin settings and home settings
    protected $gs;
    protected $as;
    protected $hs;

    protected $paginator;

    public function  __construct(PaginatorInterface $paginator, Globalsettings $gs)
    {
        
        $this->paginator = $paginator;

        $this->gs = $gs->getGlobalSettings();
        $this->as = $gs->getAdminSettings();
        $this->hs = $gs->getHomeSettings();
    }
}
