<?php

namespace App\Form;

use App\Entity\Project;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\PositiveOrZero;


class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Project name'
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description'
            ])
            ->add('level', IntegerType::class, [
                'label' => 'Level',
                'required' => false,
                'constraints' => [new PositiveOrZero()],
            ])
            ->add('dateStartAt', DateType::class, [
                'widget' => 'single_text',
                'label' => "Start date",
                'attr' => [ 
                            'class' => 'form-control dateinput',
                            'name' => "event_date",
                            'autocomplete' => "off",
                            ],
                'required' => false,
                'html5' => false,
                ])
                ->add('dateEndAt', DateType::class, [
                    'widget' => 'single_text',
                    'label' => "End date",
                    'attr' => [ 
                                'class' => 'form-control dateinput',
                                'name' => "event_date",
                                'autocomplete' => "off",
                                ],
                    'required' => false,
                    'html5' => false,
                    ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
