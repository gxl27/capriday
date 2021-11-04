<?php
namespace App\Service;

use App\Repository\ProjectRepository;

class Projectsactive
{

    private $pa;
    private $gs;

    public function __construct(ProjectRepository $projectRepository, Globalsettings $gs) {

        $this->pa = $projectRepository->findAllActive();
        $this->gs = $gs;
    }

    public function getPa(){
        // get active projects
        return $this->pa;
    }

    public function checkPa(){
        $items = sizeof($this->pa);
        $max = $this->gs->getHomeSettings()['navActiveProjects'];
        if($items > $max){
            return 0;
        }

        return 1;
    }

}