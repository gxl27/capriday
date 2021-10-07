<?php

namespace App\Entity;

use App\Repository\GlobalsettingsRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GlobalsettingsRepository::class)
 */
class Globalsettings
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;


    /**
     * @ORM\Column(type="integer")
     */
    
    private $navActiveProjects;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getNavActiveProjects(): ?int
    {
        return $this->navActiveProjects;
    }

    public function setNavActiveProjects(int $navActiveProjects): self
    {
        $this->navActiveProjects = $navActiveProjects;

        return $this;
    }

    public function getHomeSettings(){

        $arr = ['email' => $this->getEmail(), 'navActiveProjects' => $this->getNavActiveProjects()];

        return $arr;
    }

    public function getAdminSettings(){
        
        $arr = ['mail' => $this->getEmail()];

        return $arr;
    }


   
}
