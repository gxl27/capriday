<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\Projectfiles;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('document', FileType::class, [
                'required' => true
            ])
            ->add('project', EntityType::class, [
                'class' => Project::class,
                'choice_value' =>'id',
                'choice_label' => 'name'
            ])
            ->add('position')

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Projectfiles::class,
        ]);
    }
}
