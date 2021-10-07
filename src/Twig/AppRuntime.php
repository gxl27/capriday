<?php
// src/Twig/AppRuntime.php
namespace App\Twig;

use Twig\Extension\RuntimeExtensionInterface;

class AppRuntime implements RuntimeExtensionInterface
{
    protected $em;

    public function __construct()
    {

        // this simple example doesn't define any dependency, but in your own
        // extensions, you'll need to inject services using this constructor
    }

    public function formatPrice($number, $decimals = 0, $decPoint = '.', $thousandsSep = ',')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = '$'.$price;

        return $price;
    }

    public function formatChange($number)
    {
        $decimals = 2;
        $decPoint = '.';
        $thousandsSep = '';
        $number = $number / 100;
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);


        return $price;
    }

    public function hex($hex)
    {
        list($r, $g, $b) = sscanf($hex, "#%02x%02x%02x");
        $result = "rgba($r, $g, $b)";
        return $result;
    }

    public function hex2hsl($hex){
        $convertor = $this->hslconvertor($hex);
        $h = $convertor[0];
        $s = $convertor[1];
        $l = $convertor[2];

        $h = $h*360;
        $h = (int)$h;
        $s = $s*100;
        $s = (int)$s;
        $l = $l*100;
        $l = (int)$l;

        
        $hsl = "hsl($h, $s%, $l%)";

        return $hsl;
    }

    public function hex2hsl3($hex){
        $convertor = $this->hslconvertor($hex);
        $h = $convertor[0];
        $s = $convertor[1];
        $l = $convertor[2];

        $h = $h*360;
        $h = (int)$h;
        $s = $s*100;
        $s = (int)$s;
        $l = $l*100;
        $l = (int)$l;
        if($l <= 2){
            $l = $l + 2;
        }else{
            $l = $l - 2;
        }
        $hsl = "hsl($h, $s%, $l%)";

        return $hsl;
    }

    public function hex2hsl5($hex){
        $convertor = $this->hslconvertor($hex);
        $h = $convertor[0];
        $s = $convertor[1];
        $l = $convertor[2];

        $h = $h*360;
        $h = (int)$h;
        $s = $s*100;
        $s = (int)$s;
        $l = $l*100;
        $l = (int)$l;
        if($l <= 5){
            $l = $l + 5;
        }else{
            $l = $l - 5;
        }
        $hsl = "hsl($h, $s%, $l%)";

        return $hsl;
    }

    public function hex2hsl10($hex){
        $convertor = $this->hslconvertor($hex);
        $h = $convertor[0];
        $s = $convertor[1];
        $l = $convertor[2];

        $h = $h*360;
        $h = (int)$h;
        $s = $s*100;
        $s = (int)$s;
        $l = $l*100;
        $l = (int)$l;
        if($l <= 10){
            $l = $l + 10;
        }else{
            $l = $l - 10;
        }
        $hsl = "hsl($h, $s%, $l%)";

        return $hsl;
    }

    


    private function hslconvertor($hex){
        $hex = str_replace("#", "", $hex);
        $hex = array($hex[0].$hex[1], $hex[2].$hex[3], $hex[4].$hex[5]);
        $rgb = array_map(function($part) {
            return hexdec($part) / 255;
        }, $hex);
        $max = max($rgb);
        $min = min($rgb);
        $l = ($max + $min) / 2;
        if ($max == $min) {
            $h = $s = 0;
        } else {
            $diff = $max - $min;
            $s = $l > 0.5 ? $diff / (2 - $max - $min) : $diff / ($max + $min);
            switch($max) {
                case $rgb[0]:
                    $h = ($rgb[1] - $rgb[2]) / $diff + ($rgb[1] < $rgb[2] ? 6 : 0);
                    break;
                case $rgb[1]:
                    $h = ($rgb[2] - $rgb[0]) / $diff + 2;
                    break;
                case $rgb[2]:
                    $h = ($rgb[0] - $rgb[1]) / $diff + 4;
                    break;
            }
            $h /= 6;
        }
        return [$h, $s, $l];
    }


    public function hexa($hex)
    {
        list($r, $g, $b) = sscanf($hex, "#%02x%02x%02x");

        $result = "rgba($r, $g, $b, 0.85)";
        return $result;
    }

    public function customsearch($heystack, $needle)
    {
        $result = strpos($heystack, $needle);
        return $result;
    }

    public function datero($date, $param)
    {

        $text="";
        $result = str_split($param);
        
        $const = ["Jan" => "Ian", "Feb" => "Feb", "Mar" => "Mar", "Apr" => "Apr", "May" => "Mai","Jun" => "Iun",
        "Jul" => "Iul", "Aug" => "Aug", "Sep" => "Sep", "Oct" => "Oct", "Nov" => "Nov", "Dec" => "Dec", "January" => "Ianuarie", "February" => "Februarie", "March" => "Martie", "April" => "Aprilie", "May" => "Mai","June" => "Iunie",
        "July" => "Iulie", "August" => "August", "September" => "Septembrie", "October" => "Octombrie", "November" => "Noiembrie", "December" => "Decembrie", "Mon" => "Lun", "Tue" => "Mar", "Wed" => "Mie", "Thu" => "Joi", "Fri" => "Vin","Sat" => "Sam",
        "Sun" => "Dum", "Monday" => "Luni", "Tuesday" => "Marti", "Wednesday" => "Miercuri", "Thursday" => "Joi", "Friday" => "Vineri","Saturday" => "Sambata",
        "Sunday" => "Duminica"];

        for($i=0; $i<sizeof($result); $i++){
            if (!preg_match("/^[a-zA-Z]$/", $result[$i])) {
                $text = $text.$result[$i];
                continue;
            }
            $singledate = $date->format("$result[$i]");
            
            if($result[$i] == 'M' || $result[$i] == 'F' || $result[$i] == 'D' || $result[$i] == 'l'){
                $inter = $date->format("$result[$i]");
                $singledate = $const["$inter"];
            }
        
            // $singledate = $date->format("$result[$i]");
            
            // $text = $text.$result[$i-1].$singledate;
            $text = $text.$singledate;
        }
        return $text;
        
        // for($i=0; $i<sizeof($const); $i++){
        //     $string = $const[$i];
        //     if(strstr($date, $string)){
        //         $result = str_replace($const[$i], $const[$i], $date);
        //     break;
        //     }
        // }
        // if($result == ""){
        //     $result = 'zero';
        // }

    }

    public function datefr($date, $param)
    {

        $text="";
        $result = str_split($param);
        
        $const = ["Jan" => "Janv", "Feb" => "Fevr", "Mar" => "Mars", "Apr" => "Avr", "May" => "Mai","Jun" => "Juin",
        "Jul" => "Juil", "Aug" => "Aout", "Sep" => "Sept", "Oct" => "Oct", "Nov" => "Nov", "Dec" => "Dec", "January" => "Janvier", "February" => "Février", "March" => "Mars", "April" => "Avril", "May" => "Mai","June" => "Juin",
        "July" => "Juillet", "August" => "Août", "September" => "Septembre", "October" => "Octobre", "November" => "Novembre", "December" => "Décembre", "Mon" => "Lun", "Tue" => "Mar", "Wed" => "Mer", "Thu" => "Jeu", "Fri" => "Ven","Sat" => "Sam",
        "Sun" => "Dim", "Monday" => "Lundi", "Tuesday" => "Mardi", "Wednesday" => "Mercredi", "Thursday" => "Jeudi", "Friday" => "Vendredi","Saturday" => "Samedi",
        "Sunday" => "Dimanche"];

        for($i=0; $i<sizeof($result); $i++){
            if (!preg_match("/^[a-zA-Z]$/", $result[$i])) {
                $text = $text.$result[$i];
                continue;
            }
            $singledate = $date->format("$result[$i]");
            
            if($result[$i] == 'M' || $result[$i] == 'F' || $result[$i] == 'D' || $result[$i] == 'l'){
                $inter = $date->format("$result[$i]");
                $singledate = $const["$inter"];
            }

            $text = $text.$singledate;
        }
        return $text;

    }

    public function nights($start, $end)
    {
        $result = $end->diff($start)->format("%d");

        return $result;
    }


    public function calculateArea(int $width, int $length)
    {
        return $width * $length ;
    }

    public function procent(int $x, int $y)
    {
        if(!$y){
            return 0;
        }

        $result = $x/$y*100;
        $result = number_format($result, 0 ,",",".");
        return $result;
    }

    public function die()
    {
        die();
        return '';
    }

    public function isnumber($number)
    {
        $result = is_numeric($number);
        return $result;
    }

    public function superadminCheck($user){
        $roles = $user->getRoles();
        if($roles){
            if($roles[0] == 'ROLE_SUPERADMIN'){
                return 1;
            }
        }
        return 0;
    }

    public function adminCheck($user){
        $roles = $user->getRoles();
        if($roles){
            if($roles[0] == 'ROLE_ADMIN'){
                return 1;
            }
        }
        return 0;
    }

}