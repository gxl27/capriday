<?php
namespace App\Listener;

use App\Entity\Photo;
use App\Entity\User;
use Doctrine\Common\EventSubscriber;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Doctrine\ORM\Event\PreFlushEventArgs;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ImageCacheSubscriber implements EventSubscriber{

/**
 * @var CacheManager
 */
private $cacheManager;

/**
 * @var UploaderHelper
 */
private $uploaderHelper;

    public function __construct(CacheManager $cacheManager, UploaderHelper $uploaderHelper){
        $this->cacheManager = $cacheManager;
        $this->uploaderHelper = $uploaderHelper;
    }
    public function getSubscribedEvents()
    {
        return[
            'preRemove',
            'preUpdate'
        ];
    }

    public function preRemove(LifecycleEventArgs $args){
        $entity = $args->getEntity();
        if(!$entity instanceof Photo){
            return;
        }
        $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'galleryImages'));
    }
    
    public function preUpdate(PreUpdateEventArgs $args){
        $entity = $args->getEntity();
        if(!$entity instanceof User){
         return;
         }
         $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'userImages'));
         if($entity->getUserImages() instanceof UploadedFile){
             $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'userImages'));
         }
     }

}