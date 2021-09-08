<?php

namespace App\Form;

use App\Entity\News;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NewsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('name', TextType::class, [
            'label' => 'Titlul'
        ])
        ->add('description', TextareaType::class, [
            'label' => false
        ])
        ->add('status', ChoiceType::class, [
            'choices' => $this->typeChoices(),
            
            'label' => 'Prioritate',
            'attr' => ['class' => 'form-control',
            
          ]
        ])
        ->add('link')
        ->add('type', ChoiceType::class, [
            'choices' => $this->typeChoices2(),
            
            'label' => 'Tipul linkului',
            'attr' => ['class' => 'form-control',
            
          ]
        ])
        ;

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => News::class,
        ]);
    }

    private function typeChoices(){
        $status = News::STATUS;
        $choices = $status;
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }
        return $output;
    }

    private function typeChoices2(){
        $status = News::TYPE;
        $choices = $status;
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }
        return $output;
    }
}
