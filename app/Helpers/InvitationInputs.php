<?php

namespace App\Helpers;

use App\Helpers\Helper;

class InvitationInputs
{

    /*
    * Build All
    *
    * Build preview sites in bulk
    *
    * @func buildAll
    */
    public static function buildAll($previews)
    {
        $meetsConditions = false;
        $stopper = 0;
        $count = 499;
        while ($meetsConditions === false) {
            $preview = $previews->skip($count)->first();
            if(isset($preview)) {
                if(!is_null($preview)) {
                    if(!is_object($preview->versions)) {
                        $rawHours = $preview->versions['active']['seed']['hours'];
                        $hours = self::setHours($rawHours);
                        //dd($preview->versions);
                        //$preview->versions['active']['seed']['hours'] = $hours;
                        $preview->versions = [
                            "active" => [
                                "meta" => $preview->versions['active']['meta'],
                                "theme" => $preview->versions['active']['theme'],
                                "props" => $preview->versions['active']['props'],
                                "seed" => [
                                    "name" => $preview->versions['active']['seed']['name'],
                                    "address" => $preview->versions['active']['seed']['address'],
                                    "city" => $preview->versions['active']['seed']['city'],
                                    "state" => $preview->versions['active']['seed']['state'],
                                    "zip" => $preview->versions['active']['seed']['zip'],
                                    "phone" => $preview->versions['active']['seed']['phone'],
                                    "email" => $preview->versions['active']['seed']['email'],
                                    "menu" => $preview->versions['active']['seed']['menu'],
                                    "hours" => $preview->versions['active']['seed']['hours'],
                                ],
                            ]
                        ];
                        $preview->save();
                    }
                }
            }
            $count = $count + 1;
            $stopper = $stopper + 1;
            if($stopper > 250) {
                $meetsConditions = true;
            }
        }
        dd('ok');
        //dd(Sushi::count()."/".Previews::count());
    }

    public static function setHours($rawHours)
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

    /*
    * Build
    *
    * Build the invitation inputs from a standard seed
    */
    public static function build($preview)
    {
        // Build the inputs
        $seed = json_decode(json_encode($preview->versions['active']['seed']));
        $inputs = [];
        $inputs['name'] = (isset($seed->name) ? $seed->name : "");
        $inputs['phone'] = (isset($seed->phone) ? $seed->phone : "");
        $inputs['email'] = (isset($seed->email) ? $seed->email[0] : "");
        $inputs['location'] = [
            "address" => (isset($seed->address) ? $seed->address : ""),
            "city" => (isset($seed->city) ? $seed->city : ""),
            "state" => (isset($seed->state) ? $seed->state : ""),
            "zip" => (isset($seed->zip) ? $seed->zip : ""),
        ];
        $inputs['hours'] = (isset($seed->hours) ? $seed->hours : "");
        // Build the links
        $inputs['website'] = "http://".$preview->domain;
        $inputs['preview'] = "/preview/".$preview->readableID;
        $inputs['google'] = "https://www.google.com/#q=".str_replace(" ", "+", $seed->name." ".$seed->address." ".$seed->city);
        return $inputs;
    }
}