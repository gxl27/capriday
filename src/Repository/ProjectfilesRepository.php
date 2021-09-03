<?php

namespace App\Repository;

use App\Entity\Projectfiles;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Projectfiles|null find($id, $lockMode = null, $lockVersion = null)
 * @method Projectfiles|null findOneBy(array $criteria, array $orderBy = null)
 * @method Projectfiles[]    findAll()
 * @method Projectfiles[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectfilesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Projectfiles::class);
    }

    // /**
    //  * @return Projectfiles[] Returns an array of Projectfiles objects
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
    public function findOneBySomeField($value): ?Projectfiles
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
