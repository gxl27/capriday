<?php

namespace App\Form;

use App\Entity\Gallery;

use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\PositiveOrZero;

class GalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('name', TextType::class, [
            'label' => 'Numele albumului'
        ])
        ->add('description', TextareaType::class, [
            'label' => 'Descriere'
        ])
        ->add('status', ChoiceType::class, [
            'choices' => $this->typeChoices(),
            
            'label' => 'Prioritate',
            'attr' => ['class' => 'form-control',
            
          ]
        ])
        ->add('level', IntegerType::class, [
            'label' => 'Nivel',
            'required' => false,
            'constraints' => [new PositiveOrZero()],
        ])
        
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Gallery::class,
        ]);
    }

    private function typeChoices(){
        $status = Gallery::STATUS;
        $choices = $status;
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }
        return $output;
    }
}
