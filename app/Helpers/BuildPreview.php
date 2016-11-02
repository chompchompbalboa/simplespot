<?php

namespace App\Helpers;

use App\Helpers\Helper;
use App\Models\Previews;
use App\Models\Sushi;

class BuildPreview
{

    /*
    * Build All
    *
    * Build preview sites in bulk
    *
    * @func buildAll
    */
    public static function buildAll()
    {
        $meetsConditions = false;
        $stopper = 0;
        $count = rand(0, Sushi::count());
        while ($meetsConditions === false) {
            $seed = Sushi::skip($count)->first();
            if(isset($seed)) {
                if(!is_null($seed)) {
                    self::build($seed);
                    $seed->delete();
                }
            }
            $stopper = $stopper + 1;
            if($stopper > 250) {
                $meetsConditions = true;
            }
        }
        dd(Sushi::count()."/".Previews::count());
    }

    /*
    * Build
    *
    * Build a preview site
    *
    * @func build
    */
    public static function build($seed)
    {
        if(strpos($seed->website, "www.") !== false) {
            $domain = explode("www.", $seed->website)[1];
        }
        else if(strpos($seed->website, "http://") !== false) {
            $domain = explode("http://", $seed->website)[1];
        }
        else if(strpos($seed->website, "https://") !== false) {
            $domain = explode("https://", $seed->website)[1];
        }
        if(isset($domain)) {
            $check = Previews::where('domain', '=', $domain)->first();
            if (is_null($check)) {
                $site = new Previews;
                $site->domain = $domain;
                $site->readableID = strtolower(str_replace(" ", "-", $seed->name));
                $site->versions = [
                    "active" => [
                        "meta" => [
                            "title" => $seed->name
                        ],
                        "theme" => "New",
                        "props" => [],
                        "seed" => [
                            "name" => $seed->name,
                            "address" => $seed->address,
                            "city" => $seed->city,
                            "state" => $seed->state,
                            "zip" => $seed->zip,
                            "phone" => $seed->phone,
                            "email" => $seed->email,
                            "hours" => $seed->hours,
                            "menu" => $seed->menu,
                        ]
                    ]
                ];
                $site->save();
                $return = [
                    "readableID" => $site->readableID,
                    "website" => $seed->website
                ];
            }
            else {
                $return = [
                    "readableID" => $check->readableID,
                    "website" => $seed->website
                ];
            }
            return $return;
        }
    }
}