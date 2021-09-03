<?php

namespace App\Repository;

use App\Entity\Postfiles;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Postfiles|null find($id, $lockMode = null, $lockVersion = null)
 * @method Postfiles|null findOneBy(array $criteria, array $orderBy = null)
 * @method Postfiles[]    findAll()
 * @method Postfiles[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostfilesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Postfiles::class);
    }

    // /**
    //  * @return Postfiles[] Returns an array of Postfiles objects
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
    public function findOneBySomeField($value): ?Postfiles
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
