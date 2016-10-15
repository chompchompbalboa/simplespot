<?php

namespace App\Helpers;

use App\Helpers\Helper;

class Translate
{
    /*
    * One
    *
    * Translate a locu seed to a One template
    */
    public static function One($raw)
    {
        // Get the seed
        $seed = $raw->venues[0];

        // Fetch the template
        $site = Helper::fetchJSON('/json/themes/One/One.json');

        // Name
        if (isset($seed->name)) {
            $site->meta->title = $seed->name;
            $site->props->title->paths->auto->props->text = $seed->name;
            $site->props->header->paths->auto->props->name = $seed->name; 
            $site->props->container->paths->auto->props->items->{'9'}->props->name = $seed->name; 
            $site->props->header->paths->auto->props->location->name = $seed->name;  
        }

        // Location
        if (isset($seed->location)) {
            // Address
            if (isset($seed->location->address1)) {
                $site->props->container->paths->auto->props->items->{'9'}->props->address = $seed->location->address1;
                $site->props->header->paths->auto->props->location->address = $seed->location->address1;
            }
            // Locality
            if (isset($seed->location->locality)) {
                $site->props->container->paths->auto->props->items->{'9'}->props->locality = $seed->location->locality;
                $site->props->header->paths->auto->props->location->locality = $seed->location->locality;
            }
            // Postal Code
            if (isset($seed->location->postal_code)) {
                $site->props->container->paths->auto->props->items->{'9'}->props->postalCode = $seed->location->postal_code;
                $site->props->header->paths->auto->props->location->postalCode = $seed->location->postal_code;
            }
            // Region
            if (isset($seed->location->region)) {
                $site->props->container->paths->auto->props->items->{'9'}->props->region = $seed->location->region;
                $site->props->header->paths->auto->props->location->region = $seed->location->region;    
            }
        }

        // Contact
        if (isset($seed->contact)) {
            // Email
            if (isset($seed->contact->email)) {
                $site->props->container->paths->auto->props->items->{'10'}->props->platforms->{'2'}->props->href = "mailto:".$seed->contact->email;
            }
            // Phone
            if (isset($seed->contact->phone)) {
                $site->props->container->paths->auto->props->items->{'10'}->props->platforms->{'3'}->props->href = "tel:".$seed->contact->phone;
                $site->props->header->paths->auto->props->phone = $seed->contact->phone;
            }
        }

        // Hours
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
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'1'}->hours = (isset($hours['Monday']) ? $hours['Monday'] : "Closed");
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'2'}->hours = (isset($hours['Tuesday']) ? $hours['Tuesday'] : "Closed");
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'3'}->hours = (isset($hours['Wednesday']) ? $hours['Wednesday'] : "Closed");
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'4'}->hours = (isset($hours['Thursday']) ? $hours['Thursday'] : "Closed");
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'5'}->hours = (isset($hours['Friday']) ? $hours['Friday'] : "Closed");
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'6'}->hours = (isset($hours['Saturday']) ? $hours['Saturday'] : "Closed");
            $site->props->container->paths->auto->props->items->{'7'}->props->hours->{'7'}->hours = (isset($hours['Sunday']) ? $hours['Sunday'] : "Closed");        
        }

        // Menus
        if (isset($seed->menus)) {
            $menus = $seed->menus;
            $containerNumber = 0;
            $imageRef = 6;
            $itemCount = 0;
            $containerNumber = 1;
            foreach ($menus as $menuNumber => $menu) {
                $menuHeader = $menu->menu_name;
                foreach ($menu->sections as $sectionNumber => $section) {
                    $sectionHeader = $section->section_name;
                    foreach ($section->subsections as $subsectionNumber => $subsection) {
                        $subsectionHeader = $subsection->subsection_name;       
                        $containerNumber = $containerNumber + 1;
                        $site->props->container->paths->menu->props->items->$containerNumber = [
                            "module" => "ContainerOneMenu",
                            "props" => [
                                "headers" => [
                                    "menu" => $menuHeader,
                                    "section" => $sectionHeader,
                                    "subsection" => $subsectionHeader,
                                ],
                                "height" => [
                                    "0em" => 100,
                                    "48em" => 100,
                                    "64em" => 100
                                ],
                                "items" => [],
                                "width" => [
                                    "0em" => 100,
                                    "48em" => 100,
                                    "64em" => 100
                                ]
                            ]
                        ];
                        $menuHeader = "";
                        $sectionHeader = "";
                        foreach($subsection->contents as $itemNumber => $item) {
                            $itemNumber = $itemNumber + 1;
                            $site->props->container->paths->menu->props->items->$containerNumber['props']['items'][$itemNumber] = [
                                "description" => (isset($item->description) ? $item->description : ""),
                                "price" => (isset($item->price) ? $item->price : ""),
                                "name" => (isset($item->name) ? $item->name : "")
                            ];
                            $itemCount = $itemCount + 1;
                        }
                        if ($itemCount > 1500000) {
                            $imageNumber = $containerNumber + 1;
                            $site->props->container->paths->menu->props->items->$imageNumber = [
                                "module" => "ContainerOneImage",
                                "props" => [
                                    "image" => "/stock/One/sushi/".$imageRef.".jpg",
                                    "height" => [
                                        "0em" => 80,
                                        "48em" => 80,
                                        "64em" => 80
                                    ],
                                    "width" => [
                                        "0em" => 100,
                                        "48em" => 100,
                                        "64em" => 100
                                    ]
                                ]
                            ];
                            $imageRef = ($imageRef > 19 ? 1 : $imageRef + 1);
                            $itemCount = 0;       
                            $containerNumber = $containerNumber + 2;
                        }   
                    }
                }
            }

        }

        return $site;
    }
}