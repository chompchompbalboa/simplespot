<?php

namespace App\Helpers;

class Translator
{

    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    /*
    * Translate
    *
    * Translate a parsed site object into a seed
    */
    public function translate($parsed)
    {
        // Initialize variables
        $seed = [];
        // Build the public portion of the seed
        $seed['public'] = $this->translatePublic($parsed);
        //Build the private portion of the seed
        $seed['private'] = $this->translatePrivate($parsed);
        // Return seed
        return $seed;
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

    /*
    * Translate Private
    *
    * Build the private portion of a seed
    */
    private function translatePrivate($parsed)
    {
        // Initialize variables
        $private = [];
        // Translate properties
        $private['type'] = "Restaurant";
        $private['theme'] = "Crisp";
        $private['manager'] = "Rocky";
        $private['website'] = $this->translateWebsite($parsed);
        // Return private
        return $private;
    }

    /*
    * Translate Public
    *
    * Build the public portion of a seed
    */
    private function translatePublic($parsed)
    {
        // Initialize variables
        $public = [];
        // Translate Properties
        $public['name'] = $this->translateName($parsed);
        $public['phone'] = $this->translatePhone($parsed);
        $public['email'] = $this->translateEmail($parsed);
        $public['locations'] = $this->translateLocations($parsed);
        $public['hours'] = $this->translateHours($parsed);
        $public['menu'] = $this->translateMenu($parsed);
        // Return public
        return $public;
    }

    /*
    * Translate Email
    *
    * Translate the parsed email into a seed
    */
    private function translateEmail($parsed)
    {
        $email = $parsed->email;
        return $email[0];
    }

    /*
    * Translate Hours
    *
    * Translate the parsed email into a seed
    */
    private function translateHours($parsed)
    {
        return $parsed->hours;
    }

    /*
    * Translate Locations
    *
    * Translate the parsed locations into a seed
    */
    private function translateLocations($parsed)
    {
        $locations['0']['street'] = $parsed->street;
        $locations['0']['city'] = $parsed->city;
        $locations['0']['state'] = $parsed->state;
        $locations['0']['zip'] = $parsed->zip;
        return $locations;
    }

    /*
    * Translate Menu
    *
    * Translate the parsed menu into a seed
    */
    private function translateMenu($parsed)
    {
        $menu = [];
        $i = 0;
        foreach($parsed->menu as $section=>$items) {
            $menu[$i]['header'] = $section;
            $j = 0;
            foreach($items as $item) {
                $menu[$i]['items'][$j]['item'] = $item['title'];
                $menu[$i]['items'][$j]['price'] = $item['price'];
                $menu[$i]['items'][$j]['description'] = $item['description'];
                $j = $j + 1;
            }
            $i = $i + 1;
        }
        return $menu;
    }

    /*
    * Translate Name
    *
    * Translate the parsed name into a seed
    */
    private function translateName($parsed)
    {
        return $parsed->name;
    }

    /*
    * Translate Phone
    *
    * Translate the parsed phone into a seed
    */
    private function translatePhone($parsed)
    {
        return $parsed->phone;
    }

    /*
    * Translate Private Website
    *
    * Translate the parsed website into a seed
    */
    private function translateWebsite($parsed)
    {
        return $parsed->website;
    }
}