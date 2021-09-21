<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    const STATUS = [
        0 => 'Normal',
        1 => 'Important',
        2 => 'Inactiv'
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
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $createdBy;

    /**
     * @ORM\OneToMany(targetEntity=Postfiles::class, mappedBy="post", orphanRemoval=true, cascade={"persist", "remove"}))
     */
    private $postfiles;


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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

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
     * @return Collection|Postfiles[]
     */
    public function getPostfiles(): Collection
    {
        return $this->postfiles;
    }

    public function addPostfile(Postfiles $postfile): self
    {
        if (!$this->postfiles->contains($postfile)) {
            $this->postfiles[] = $postfile;
            $postfile->setPost($this);
        }

        return $this;
    }

    public function removePostfile(Postfiles $postfile): self
    {
        if ($this->postfiles->removeElement($postfile)) {
            // set the owning side to null (unless already changed)
            if ($postfile->getPost() === $this) {
                $postfile->setPost(null);
            }
        }

        return $this;
    }

}
