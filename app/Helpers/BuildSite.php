<?php

namespace App\Helpers;

use App\Helpers\Helper;
use App\Models\Sites;

class BuildSite
{
    /*
    * Build
    *
    * Translate a locu seed to a One template
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
        $check = Sites::where('domain', '=', $domain)->first();
        if (is_null($check)) {
            $site = new Sites;
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