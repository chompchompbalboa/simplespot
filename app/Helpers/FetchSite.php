<?php

namespace App\Helpers;

class FetchSite
{
    /*
    * Fetch JSON
    *
    * Get resources from a JSON file and return it as an array
    */
    public static function fetchJSON($location)
    {
        $contents= file_get_contents(getcwd().$location);
        $json = json_decode($contents);

        return $json;
    }
}