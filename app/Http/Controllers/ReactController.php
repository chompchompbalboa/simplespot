<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Helpers\Helper;

use App\Models\Modules;
use App\Models\Sites;

class ReactController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Modules $modules, Request $request, Sites $sites)
    {
        $this->modules = $modules;
        $this->request = $request;
        $this->sites = $sites;
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

    private function modules($data, $info)
    {
        $modules = Helper::fetchJSON('/assets/modules.json');
        return $modules;
    }

    public function seed($data, $info)
    {
        $seed = Helper::fetchJSON('/assets/seed.json');
        return $seed;
    }

    public function site($data, $info)
    {
        $site = $this->sites->where('domain', '=', $data->domain)->first();
        if(is_null($site)) {
            $site = $this->sites->where('domain', '=', 'restaurant.local')->first();
        }
        return $site;
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
