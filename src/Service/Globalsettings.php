<?php
namespace App\Service;


use Doctrine\ORM\EntityManagerInterface;
use App\Repository\GlobalsettingsRepository;

class Globalsettings
{

    private $gs;

    public function __construct(GlobalsettingsRepository $gs) {

        $this->gs = $gs->getActiveGs();

        $this->as = $this->getGs()->getAdminSettings();
        $this->hs = $this->getGs()->getHomeSettings();
    }

    public function getGs(){

        return $this->gs;
    }

    public function getHs(){

        return $this->hs;
    }

    public function getAs(){

        return $this->as;
    }
}