<?php

namespace App\Helpers;

use App\Helpers\Helper;

class Generator
{
    /*
    * Generate
    *
    * Generate the boilerplate from a site using an input template
    */
    public static function generate($path)
    {
        // Get the template
        $template = Helper::fetchJSON('/templates/'.$path.'.json');
        // Get the base boilerplate file
        $boilerplate = file_get_contents(getcwd().'/templates/Boilerplate.jsx');
        // Make the base directory
        mkdir(getcwd()."/templates/".ucfirst($path));
        // For each component
        foreach ($template as $component => $specs) {
            // Replace "Boilerplate" with the component name
            $working = str_replace("{*( Boilerplate )*}", $component, $boilerplate);
            // Insert the element type
            $working = str_replace("{*( element )*}", $specs->element, $working);
            // Add includes
            foreach ($specs->includes as $include) {
                // Generate the include string 
                $string = "const ".$include." = require('../".$include."/".$include.".jsx');";
                // Insert the string
                $working = str_replace("{*( include )*}", $string."\n{*( include )*}", $working);
            }
            // Remove the include placeholder
            $working = str_replace("{*( include )*}", "", $working);
            // Make the component directory
            mkdir(getcwd()."/templates/".ucfirst($path)."/".$component);
            // Write the file
            if(file_put_contents(getcwd()."/templates/".ucfirst($path)."/".$component."/".$component.".jsx", $working)) {
                echo "Succesfully wrote ".$component.".jsx";
                echo "<br>";
            }
        }
    }
}