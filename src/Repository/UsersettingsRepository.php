<?php

namespace App\Repository;

use App\Entity\Usersettings;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Usersettings|null find($id, $lockMode = null, $lockVersion = null)
 * @method Usersettings|null findOneBy(array $criteria, array $orderBy = null)
 * @method Usersettings[]    findAll()
 * @method Usersettings[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsersettingsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Usersettings::class);
    }

    // /**
    //  * @return Usersettings[] Returns an array of Usersettings objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Usersettings
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
