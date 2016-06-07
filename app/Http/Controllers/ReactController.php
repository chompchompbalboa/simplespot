<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Helpers\Helper;

use App\Models\Seed;

class ReactController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Request $request, Seed $seed)
    {
        $this->request = $request;
        $this->seed = $seed;
    }

    public function react()
    {
        $action = $this->request->route('action');
        $data = json_decode($this->request->input('data'));
        $info = $this->request->route('info');
        $response = $this->$action($data, $info);
        return json_encode($response);
    }

    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function admin($data, $info)
    {
        $admin = Helper::fetchJSON('/assets/admin.json');
        return $admin;
    }

    private function app($data, $info)
    {
        $app = Helper::fetchJSON('/assets/app.json');
        return $app;
    }

    public function seed($data, $info)
    {
        $seed = Helper::fetchJSON('/assets/seed.json');
        return $seed;
    }

    public function site($data, $info)
    {
        $site['public'] = [];
        $site['private']['container'] = $this->container;
        return $site;
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
