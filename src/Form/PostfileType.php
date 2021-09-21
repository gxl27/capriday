<?php

namespace App\Form;

use App\Entity\Post;
use App\Entity\Postfiles;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class PostfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('postfilesFiles', FileType::class, [
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
            'data_class' => Postfiles::class,
        ]);
    }
}
