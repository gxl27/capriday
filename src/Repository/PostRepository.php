<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function findAllStatus($status = NULL)
    {
        
        return $this->findAllStatusQuery($status)
            ->getResult()
        ;
    }

    public function findAllStatusQuery($status = NULL)
    {
        $qb = $this->getAll();

        if($status !== NULL){
            if(is_array($status)){
                $qb = $qb->andWhere('r.status IN (:status)')
                ->setParameter('status', $status);
            }else {
                $qb = $qb->andWhere('p.status = :status')
                ->setParameter('status', $status);
            }
            
        }
        $qb = $qb->getQuery();

        return $qb;
            
        
    }

    public function getAll() {
        return $this->createQueryBuilder('p')
        ->orderBy('p.id', 'DESC');
    }

    // /**
    //  * @return Post[] Returns an array of Post objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Post
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
