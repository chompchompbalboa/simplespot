<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Helpers\Helper;
use App\Helpers\ThemeTranslator;

use App\Models\Modules;
use App\Models\Sites;
use App\Models\User;

class ReactController extends Controller
{
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    public function __construct(Auth $auth, Modules $modules, Request $request, Sites $sites, ThemeTranslator $themeTranslator, User $user)
    {
        $this->app = app();
        $this->auth = $auth;
        $this->modules = $modules;
        $this->request = $request;
        $this->sites = $sites;
        $this->themeTranslator = $themeTranslator;
        $this->user = $user;
    }

    public function react()
    {
        $request = $this->request->input('request');
        $url = json_decode($this->request->input('url'));
        switch($request) {
            case "CONTENT_APP":
                $defaultSite = $this->app->make('stdClass');
                $defaultSite->domain = "omni.com";
                $defaultSite->path = "/";
                $response = [
                    [
                        "key" => "app",
                        "value" => $this->fetchApp()
                    ],
                    [
                        "key" => "site",
                        "value" => $this->fetchSite($defaultSite)
                    ]
                ];
            break;
            case "CONTENT_SITE":
                $response = [
                    [
                        "key" => "site",
                        "value" => $this->fetchSite($url)
                    ]
                ];
            break;
        }
        return json_encode($response);
    }

    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    public function admin($data, $info)
    {
        $admin = Helper::fetchJSON('/json/adminNew.json');
        $admin->display = [
            "active" => "true",
            "load" => "initial",
            "path" => $data->path
        ];
        $admin->versions->active->stores->admin = Helper::fetchJSON('/json/stores/adminStoreNew.json');
        return $admin;
    }

    private function app($data, $info)
    {
        switch ($info) {
            case "login":
                return $this->login($data);
            break;
            case "logout":
                return $this->logout($data);
            break;
            case "new":
                return $this->newSite($data);
            break;
            case "register":
                return $this->register($data);
            break;
            case "user":
                return $this->doesUserExist($data); 
            break;
            default:
                $app = Helper::fetchJSON('/json/app.json');
                if (Auth::check()) {
                    $user = Auth::user();
                    $app->user->loggedIn = "true";
                    $app->user->email = $user->email;
                }
                return $app;
        }
    }

    private function modules($data, $info)
    {
        $modules = Helper::fetchJSON('/json/modules.json');
        //$modules = $this->modules->all();
        return $modules;
    }

    public function seed($data, $info)
    {
        $seed = Helper::fetchJSON('/json/seed.json');
        return $seed;
    }

    private function fetchApp()
    {
        return [];
    }

    private function fetchSite($url)
    {
        $site = Helper::fetchSite($this->sites, $url);
        return $site;
    }

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------

}
