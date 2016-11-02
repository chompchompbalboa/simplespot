<?php

namespace App\Helpers;

use App\Models\RawSiteObjects;
use App\Models\Sushi;

class SiteObjects
{
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
        $item = 59000;
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
                            $new->hours = self::hours($seed->hours);
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
        dd(Sushi::count());
    }

    /*
    * Hours
    *
    * @function hours
    */
    public static function hours($rawHours)
    {
        $hours = [];
        $days = [
            "Mo" => "Monday",
            "Tu" => "Tuesday",
            "We" => "Wednesday",
            "Th" => "Thursday",
            "Fr" => "Friday",
            "Sa" => "Saturday",
            "Su" => "Sunday"
        ];
        foreach ($days as $id => $day) {
            if(isset($rawHours[$day])) {
                return $rawHours;
            }
            else {
                if(isset($rawHours[$id])) {
                    $current = $rawHours[$id];
                    $openHour = intval($current['open']['hour']);
                    $closeHour = intval($current['close']['hour']);
                    $openMeridien = ($openHour > 11 ? "PM" : "AM");
                    $closeMeridien = ($closeHour > 11 ? "PM" : "AM");
                    $openHour = ($openHour > 12 ? $openHour - 12 : $openHour);
                    $closeHour = ($closeHour > 12 ? $closeHour - 12 : $closeHour);
                    $hours[$day] = $openHour.":".$current['open']['minute']." ".$openMeridien." - ".$closeHour.":".$current['close']['minute']." ".$closeMeridien;
                }
                else {
                    $hours[$day] = "Closed";
                }    
            }
        }
        return $hours;
    }
}