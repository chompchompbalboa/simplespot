<?php

namespace App\Helpers;

class Helper
{
    /*
    * Fetch JSON
    *
    * Get resources from a JSON file and return it as an array
    *
    * @function fetchJSON
    */
    public static function fetchJSON($location)
    {
        $contents= file_get_contents(getcwd().$location);
        $json = json_decode($contents);

        return $json;
    }

    /*
    * Fetch Site
    *
    * Resolve the host name and use it to fetch the correct site from the db
    *
    * @function fetchSite
    */
    public static function fetchSite($sites, $url)
    {
        // Replace a .local domain with the .com that's stored in the backend
        $explode = explode('.', $url->domain);
        if($explode[1] === 'local') {
            $explode[1] = 'com'; 
        }
        $domain = implode('.', $explode);
        // Handle a request from one of the staging sites
        switch($domain) {
            case "rockyeastmanstaging.com":
                $domain = "nwaire.com";
            break;
        }
        // Fetch the site from the db
        $site = $sites->where('domain', '=', $domain)->first();
        // Return a default site when needed
        if(is_null($site)) {
            $site = $sites->where('domain', '=', 'omni.com')->first();
        }
        // Get the id
        $id = $site->_id;
        // Return only the active version of the site
        $site = $site->versions['active'];
        // Set display path
        $site['display'] = [
            "path" => $url->path
        ];
        // Attach the ID to the site object
        $site['meta']['id'] = $id;
        return $site;
    }

    /*
    * Fetch URL
    *
    * Resolve the host name and use it to fetch the correct site from the db
    *
    * @function fetchURL
    */
    public static function fetchURL($appURL, $sites)
    {
        // Get the readableID
        $readableID = str_replace("/", "", $appURL->path);
        // Fetch the site from the db
        $site = $sites->where('readableID', '=', $readableID)->first();
        // Return a default site when needed
        if(is_null($site)) {
            $site = $sites->where('domain', '=', 'omni.com')->first();
        }
        // Build the domain object
        $url = [
            "domain" => $site->domain,
            "path" => "/"
        ];
        return json_encode($url);
    }
}