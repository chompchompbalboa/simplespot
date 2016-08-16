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
        $hostname = explode('//', $this->request->url());
        $app = app();
        $url = $app->make('stdClass');
        $url->domain = $hostname[1];
        $url->path = $this->request->path();
        $site = Helper::fetchSite($this->sites, $url);
        // Set parameters
        $data['title'] = $site['meta']['title'];
        $data['favicon'] = 'uploads/'.$site['meta']['id'].'/favicon.ico';
        $data['bundle'] = '/js/site-index.js';
        return view('site', $data);
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
