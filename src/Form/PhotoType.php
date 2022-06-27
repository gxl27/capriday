<?php

namespace App\Form;


use App\Entity\Photo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\PositiveOrZero;


class PhotoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('level', IntegerType::class, [
                'label' => 'Level',
                'required' => false,
                'constraints' => [new PositiveOrZero()],
            ])
            ->add('longitude', TextType::class, [
                'label' => 'Longitude',
                'required' => false,
            ])
            ->add('latitude', TextType::class, [
                'label' => 'Latitude',
                'required' => false,
            ])
            ->add('dateAt', DateType::class, [
                'widget' => 'single_text',
                'label' => "Date",
                'attr' => [ 
                            'class' => 'form-control dateinput',
                            'name' => "event_date",
                            'autocomplete' => "off",
                            ],
                'required' => false,
                'html5' => false,
                ])
            ->add('photo', FileType::class, [
                'required' => true,
                'mapped' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '10240k',
                    ])
                ],
            ])
            // ->add('post', EntityType::class, [
            //     'class' => Post::class,
            //     'choice_value' =>'id',
            //     'choice_label' => 'name'
            // ])


        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Photo::class,
        ]);
    }
}
