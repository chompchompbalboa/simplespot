<?php

namespace App\Helpers;

use App\Helpers\Helper;

class BusinessInfoInputs
{
    /*
    * Build From Locu
    *
    * Translate a locu seed to a One template
    */
    public static function buildFromLocu($seed)
    {
        $inputs = [];
        $inputs['name'] = (isset($seed->name) ? $seed->name : "");
        $inputs['phone'] = (isset($seed->contact->phone) ? $seed->contact->phone : "");
        $inputs['email'] = (isset($seed->contact->email) ? $seed->contact->email : "");
        $inputs['location'] = (isset($seed->location) ? $seed->location : "");
        if (isset($seed->open_hours)) {
            foreach ($seed->open_hours as $day => $open_hours) {
                $comma = false;
                $hoursString = "";
                foreach ($open_hours as $current) {
                    $hoursString = ($comma ? $hoursString + ", " : $hoursString);
                    // Open
                    list($openHour, $openMinute) = explode(":", $current[0]);
                    $openMeridien = ($openHour > 12 ? ($openHour == 24 ? "AM" : "PM"): "AM");
                    $openHour = ($openHour > 12 ? $openHour - 12 : $openHour);
                    // Close
                    list($closeHour, $closeMinute) = explode(":", $current[1]);
                    $closeMeridien = ($closeHour > 12 ? ($closeHour == 24 ? "AM" : "PM"): "AM");
                    $closeHour = ($closeHour > 12 ? $closeHour - 12 : $closeHour);
                    $hoursString = $openHour.":".$openMinute." ".$openMeridien." - ".$closeHour.":".$closeMinute." ".$closeMeridien;
                    $comma = true;
                }
                $hours[ucfirst($day)] = $hoursString;
            }
            $inputs['hours']['Monday'] = (isset($hours['Monday']) ? $hours['Monday'] : "Closed");
            $inputs['hours']['Tuesday'] = (isset($hours['Tuesday']) ? $hours['Tuesday'] : "Closed");
            $inputs['hours']['Wednesday'] = (isset($hours['Wednesday']) ? $hours['Wednesday'] : "Closed");
            $inputs['hours']['Thursday'] = (isset($hours['Thursday']) ? $hours['Thursday'] : "Closed");
            $inputs['hours']['Friday'] = (isset($hours['Friday']) ? $hours['Friday'] : "Closed");
            $inputs['hours']['Saturday'] = (isset($hours['Saturday']) ? $hours['Saturday'] : "Closed");
            $inputs['hours']['Sunday'] = (isset($hours['Sunday']) ? $hours['Sunday'] : "Closed");     
        }
        return $inputs;
    }

    /*
    * Build From Site Object
    *
    * Translate a site object to a One template
    */
    public static function buildFromSiteObject($seed)
    {
        $inputs = [];
        return $inputs;
    }
}