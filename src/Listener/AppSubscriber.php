<?php
namespace App\Listener;

use App\Entity\Project;

use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\EntityManagerInterface;

class AppSubscriber implements EventSubscriber{

private $em;


    public function  __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getSubscribedEvents()
    {
        return[
            'preUpdate',
        ];
    }

    public function preUpdate(LifecycleEventArgs $args){
        $entity = $args->getEntity();
        if($entity instanceof Project)
        {
            // $entity->setUpdatedAt(new \DateTime());
        }

    }

}