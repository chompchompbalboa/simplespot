<?php

namespace App\Helpers;

class Locu
{
    /*
    * Fetch Seed
    *
    * Fetch the raw data about a venue from Locu
    *
    * @function fetchJSON
    */
    public static function fetchSeed($url)
    {
        $query = [
            'api_key' => '75c84c82c44bfb658d22ee1b416cf7eb0670bcc1',
            'fields' => [
                'categories',
                'contact',
                'location',
                'open_hours',
                'name',
                'menus'
            ],
            'venue_queries' => [
                [
                    'website_url' => $url
                ]
            ]
        ];
        $query = json_encode($query);
        $ch = curl_init('https://api.locu.com/v2/venue/search');                                                                      
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);                                                                  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
        curl_setopt($ch, CURLOPT_HTTPHEADER, [                                                                         
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($query)]);
        $locuSeed = json_decode(curl_exec($ch));
        return $locuSeed;
    }
}