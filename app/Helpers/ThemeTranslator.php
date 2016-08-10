<?php

namespace App\Helpers;

use App\Helpers\Helper;

class ThemeTranslator
{
    /*
    * Translate
    *
    * Take a seed and translate it into a specified theme
    */
    public function translate($seed, $theme)
    {
        $translateFunction = "translate".$theme;
        $site = $this->$translateFunction($seed);
        return $site;
    }

    private function translateOne($seed)
    {
        dd($seed);
        $raw = Helper::fetchJSON('/json/themes/One.json');
        $replacements = [
            "name" => $seed->venues[0]->name
        ];
        $site = $this->buildFromRaw($raw, $replacements);
        return $site;

    }

    private function buildFromRaw($raw, $replacements)
    {
        $build = json_encode($raw);
        foreach ($replacements as $placeholder => $replacement) {
            $search = "{*( ".$placeholder." )*}";
            $build = str_replace($search, $replacement, $build);
        }
        $build = json_decode($build);
        return $build;
    }
}