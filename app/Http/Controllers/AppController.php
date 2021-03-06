<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\Helper;
use App\Helpers\Generator;

use App\Seed;
use App\Invite;

class AppController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Request $request)
    {
        // Inject dependencies
        $this->request = $request;
    }


    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function home()
    {
        $data['title'] = 'Coming soon - Simplespot';
        $data['bundle'] = '/js/app-index.js';
        return view('app', $data);
    }

    public function generate()
    {
        // Get the template path from the route
        $path = $this->request->route('template');
        Generator::generate($path);
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
