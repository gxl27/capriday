<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\Projectfiles;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class ProjectfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('projectfilesFiles', FileType::class, [
                'required' => true,
                'mapped' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '10240k',
                    ])
                ],
            ])
            // ->add('project', EntityType::class, [
            //     'class' => Project::class,
            //     'choice_value' =>'id',
            //     'choice_label' => 'name'
            // ])


        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Projectfiles::class,
        ]);
    }
}
