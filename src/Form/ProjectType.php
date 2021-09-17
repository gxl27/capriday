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
                'label' => 'Numele proiectului'
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Descriere'
            ])
            ->add('position', IntegerType::class, [
                'label' => 'Pozitia',
                'constraints' => [new PositiveOrZero()],
            ])
            ->add('dateStartAt', DateType::class, [
                'widget' => 'single_text',
                'label' => "Data de inceput a proiectului",
                'attr' => [ 
                            'class' => 'form-control dateinput',
                            'name' => "event_date",
                            'autocomplete' => "off",
                            ],
                'required' => true,
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
