<?php
namespace App\Twig;


use App\Twig\AppRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension 
{

    public function getFilters()
    {
        return [
            new TwigFilter('price', [AppRuntime::class, 'formatPrice']),
            new TwigFilter('change', [AppRuntime::class, 'formatChange']),
            new TwigFilter('customsearch', [AppRuntime::class, 'customsearch']),
            new TwigFilter('hex', [AppRuntime::class, 'hex']),
            new TwigFilter('hex2hsl', [AppRuntime::class, 'hex2hsl']),
            new TwigFilter('hex2hsl3', [AppRuntime::class, 'hex2hsl3']),
            new TwigFilter('hex2hsl5', [AppRuntime::class, 'hex2hsl5']),
            new TwigFilter('hex2hsl10', [AppRuntime::class, 'hex2hsl10']),
            new TwigFilter('hexa', [AppRuntime::class, 'hexa']),
            new TwigFilter('datero', [AppRuntime::class, 'datero']),
            new TwigFilter('datefr', [AppRuntime::class, 'datefr']),
            new TwigFilter('isnumber', [AppRuntime::class, 'isnumber'])
            
        ];
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('area', [AppRuntime::class, 'calculateArea']),
            new TwigFunction('procent', [AppRuntime::class, 'procent']),
            new TwigFunction('die', [AppRuntime::class, 'die']),
            new TwigFunction('nights', [AppRuntime::class, 'nights']),
            new TwigFunction('superadminCheck', [AppRuntime::class, 'superadminCheck']),
            new TwigFunction('adminCheck', [AppRuntime::class, 'adminCheck'])
            
            
        ];
    }

}