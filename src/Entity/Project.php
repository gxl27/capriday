<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProjectRepository::class)
 */
class Project
{
    const STATUS = [
        0 => 'Activ',
        1 => 'Finalizat',
        2 => 'Inactiv',
    ];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateStartAt;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $createdBy;

    /**
     * @ORM\OneToMany(targetEntity=Projectfiles::class, mappedBy="project", orphanRemoval=true, cascade={"persist", "remove"}))
     */
    private $projectfiles;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $level;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateEndAt;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->status = 0;
        $this->postfiles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateStartAt(): ?\DateTimeInterface
    {
        return $this->dateStartAt;
    }

    public function setDateStartAt(?\DateTimeInterface $dateStartAt): self
    {
        $this->dateStartAt = $dateStartAt;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function getStatusFormat(){
        return SELF::STATUS[$this->getStatus()];
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCreatedBy(): ?string
    {
        return $this->createdBy;
    }

    public function setCreatedBy(string $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    /**
     * @return Collection|Projectfiles[]
     */
    public function getProjectfiles(): Collection
    {
        return $this->projectfiles;
    }

    public function addProjectfile(Projectfiles $projectfile): self
    {
        if (!$this->projectfiles->contains($projectfile)) {
            $this->projectfiles[] = $projectfile;
            $projectfile->setProject($this);
        }

        return $this;
    }

    public function removeProjectfile(Projectfiles $projectfile): self
    {
        if ($this->projectfiles->removeElement($projectfile)) {
            // set the owning side to null (unless already changed)
            if ($projectfile->getProject() === $this) {
                $projectfile->setProject(null);
            }
        }

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(?int $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getDateEndAt(): ?\DateTimeInterface
    {
        return $this->dateEndAt;
    }

    public function setDateEndAt(?\DateTimeInterface $dateEndAt): self
    {
        $this->dateEndAt = $dateEndAt;

        return $this;
    }
}
