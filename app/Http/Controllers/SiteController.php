<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\Helper;

use App\Models\Sites;

class SiteController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Request $request, Sites $sites)
    {
        $this->request = $request;
        $this->sites = $sites;
    }


    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function home()
    {
        // Grab the hostname
        $hostname = explode('//', $this->request->url());
        // Process the hostname
        $explode = explode('.', $hostname[1]);
        if($explode[1] === 'local') {
            $explode[1] = 'com';
        }
        $domain = implode('.', $explode);
        // Fetch the current site from the db
        $site = $this->sites->where('domain', '=', $domain)->first();
        if(is_null($site)) {
            $site = $this->sites->where('domain', '=', 'rockyeastman.com')->first();
        }
        $id = $site->_id;
        $site = $site->versions['active'];
        // Set parameters
        $data['title'] = $site['meta']['title'];
        $data['favicon'] = 'uploads/'.$id.'/favicon.ico';
        $data['bundle'] = '/js/site-index.js';
        return view('site', $data);
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
