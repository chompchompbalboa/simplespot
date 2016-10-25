<?php

namespace App\Helpers;

use App\Models\RawSiteObjects;
use App\Models\Sushi;

class SiteObjects
{
    /*
    * Fetch Sushi Seed
    *
    * Fetch the raw data about a venue from Locu
    *
    * @function fetchSeed
    */
    public static function fetchSushiSeed()
    {
        $meetsConditions = false;
        $stopper = 0;
        $count = 0;
        while ($meetsConditions === false) {
            $seed = RawSiteObjects::skip(rand(1,59730))->first();
            if (is_array($seed->email)) {
                if(!in_array(null, $seed->email)) {
                    if (stripos(json_encode($seed->menu),"sushi")) {
                        $meetsConditions = true;
                    }
                }    
            }
            $stopper = $stopper + 1;
            if($stopper > 1000) {
                $meetsConditions = true;
            }
        }
        return $seed;
    }


    /*
    * Build Seed Database
    *
    * Fetch the raw data about a venue from Locu
    *
    * @function fetchSeed
    */
    public static function buildSeedDatabase()
    {
        $meetsConditions = false;
        $stopper = 0;
        $count = 0;
        $item = 4000;
        while ($meetsConditions === false) {
            $seed = RawSiteObjects::skip($item)->first();
            if (is_array($seed->email)) {
                if(!in_array(null, $seed->email)) {
                    if (stripos(json_encode($seed->menu),"sashimi")) {
                        $check = Sushi::where('website', '=', $seed->website)->first();
                        if(is_null($check)) {
                            $new = new Sushi;
                            $new->name = $seed->name;
                            $new->address = $seed->address;
                            $new->city = $seed->city;
                            $new->state = $seed->state;
                            $new->zip = $seed->zip;
                            $new->phone = $seed->phone;
                            $new->email = $seed->email;
                            $new->website = $seed->website;
                            $new->hours = $seed->hours;
                            $new->menu = $seed->menu;
                            $new->save();
                        }
                        //dd($new);
                    }
                }    
            }
            $stopper = $stopper + 1;
            if($stopper > 1000) {
                $meetsConditions = true;
            }
            $item = $item + 1;
        }
    }
}