<?php
namespace App\Service;


use Doctrine\ORM\EntityManagerInterface;
use App\Repository\GlobalsettingsRepository;

class Globalsettings
{

    private $gs;
    private $hs;
    private $as;

    public function __construct(GlobalsettingsRepository $gs) {

        // get active global settings from database
        $this->gs = $gs->getActiveGs();

        // set homesettings and adminsettings (functions in globalsettings object)
        $this->hs = $this->gs->getHomeSettings();
        $this->as = $this->gs->getAdminSettings();
    }

    public function getGlobalSettings(){
        // get global settings

        return $this->gs;
    }

    public function getHomeSettings(){
        // get global home settings (/home)

        return $this->hs;
    }

    public function getAdminSettings(){
        // get global admin settings (/admin)

        return $this->as;
    }
}