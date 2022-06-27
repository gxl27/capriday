<?php

namespace App\Form;

use App\Entity\Contactmsg;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactmsgType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class , [
            'label' => false,
              'attr' => ['class' => '',
            'placeholder' => 'Full name',
            ],
            ])
            ->add('telephone', TextType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Telephone',
            ],
            ])
            ->add('email', TextType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'E-mail',
            ],
            ])
            ->add('title', TextType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Subject',
            ],
            ])
            ->add('subject', TextareaType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Write the message ...',
            ],
            ])
              ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Contactmsg::class,
            'method' => 'post',
        ]);
    }

    public function getBlockPrefix(){
        return '';
    }

}
