<?php

namespace App\Entity;

use App\Repository\ProjectfilesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @ORM\Entity(repositoryClass=ProjectfilesRepository::class)
 * @Vich\Uploadable
 */
class Projectfiles
{
    const EXTENSIONS = [
        'pdf', 'csv', 'docx', 'doc', 'ods', 
        'jpeg', 'jpg', 'png', 'svg', 'txt',
        'xlsx', 'xls', 'json'
    ];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255,  nullable=true)
     * @var string
     */
    private $document;

     /**
     * @Vich\UploadableField(mapping="projectfiles_files", fileNameProperty="document")
     * @var File
     */
    private $projectfilesFiles;

    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="projectfiles")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updated_At;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    public function __construct(){

        $this->updated_At = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDocument(): ?string
    {
        return $this->document;
    }

    public function setDocument(?string $document): self
    {
        $this->document = $document;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function setProjectfilesFiles(File $document = null)
    {
        $this->projectfilesFiles = $document;

        // VERY IMPORTANT:
        // It is required that at least one field changes if you are using Doctrine,
        // otherwise the event listeners won't be called and the file is lost
        if ($this->projectfilesFiles instanceof UploadedFile) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime();
        }
    }

    public function getProjectfilesFiles()
    {
        return $this->projectfilesFiles;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_At;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_At): self
    {
        $this->updated_At = $updated_At;

        return $this;
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

    public function getExtension(){

        $doc = $this->getDocument();
        $extension = pathinfo($doc, PATHINFO_EXTENSION);

        return $extension;
    }

    public function checkValidExtension($file){
        $extension = pathinfo($file, PATHINFO_EXTENSION);
        if(!in_array($extension, SELF::EXTENSIONS)){
            return 0;
        }
        return $extension;
    }
}
