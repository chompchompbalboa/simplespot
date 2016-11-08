<?php
/*
* ReactController.php
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* Handles all the requests from the content store. Requires a request type, 
* returns a change to the content store.
*/

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Helpers\Helper;
use App\Helpers\Locu;
use App\Helpers\SiteObjects;
use App\Helpers\Translate;
use App\Helpers\BusinessInfoInputs;
use App\Helpers\InvitationInputs;
use App\Helpers\BuildPreview;

use App\Models\Previews;
use App\Models\Sites;
use App\Models\User;
use App\Models\Sushi;
use App\Models\ReadyForInvite;

class ReactController extends Controller
{
    /**
    * Constructor
    *
    * @requires Request
    * @requires Sites
    */
    public function __construct(Request $request, Previews $previews, Sites $sites, User $user)
    {
        $this->app = app();
        $this->request = $request;
        $this->previews = $previews;
        $this->sites = $sites;
        $this->user = $user;
    }

    /**
    * React
    *
    * Accepts the request type, controls the translation to the content store change
    *
    * @function react
    * @returns {json}
    */
    public function react()
    {
        $request = $this->request->input('request');
        switch($request) {
            case "APP_INVITATIONS_GET":
                // Let's fix the hours thing
                $seed = SiteObjects::buildSeedDatabase();
                $previews = BuildPreview::buildAll();
                dd("ok");
                //InvitationInputs::buildAll($this->previews);
                dd('stop');
                // Get a random preview site
                $rand = rand(1,$this->previews->count());
                $preview = $this->previews->skip($rand)->first();
                // Build the inputs
                $inputs = InvitationInputs::build($preview);
                if (!is_null($preview)) {
                    $response = [
                        [
                            "key" => "app.messages.submit",
                            "value" => ""
                        ],
                        [
                            "key" => "app.inputs.AppDashboardContentInvitations",
                            "value" => $inputs
                        ],
                    ];  
                }
                else {
                    $response = [
                        [
                            "key" => "app.messages.submit",
                            "value" => "I'm having trouble loading an invitation right now. Give me a second or two to work things out and try again."
                        ]
                    ];   
                }   
            break;
            case "INITIAL_APP":
                $site = $this->fetchSite(json_decode(Helper::fetchURL(json_decode($this->request->input('url')), $this->previews)));
                $response = [
                    [
                        "key" => "load",
                        "value" => "initial"
                    ],
                    [
                        "key" => "app",
                        "value" => $this->fetchApp($site, json_decode($this->request->input('url')))
                    ],
                    [
                        "key" => "site",
                        "value" => $site
                    ]
                ];
            break;
            case "INITIAL_SITE":
                $response = [
                    [
                        "key" => "load",
                        "value" => "initial"
                    ],
                    [
                        "key" => "site",
                        "value" => $this->fetchSite(json_decode($this->request->input('url')))
                    ]
                ];
            break;
            case "LOGIN_APP":
                $data = json_decode($this->request->input('data'));
                if(Auth::attempt(['email' => $data->email, 'password' => $data->password], true)) {
                    $response = [
                        [
                            "key" => "app",
                            "value" => $this->fetchApp(json_decode($this->request->input('url')))
                        ]
                    ];
                }
                else {     
                    $response = [
                        [
                            "key" => "app.messages.login",
                            "value" => "Your username or password could not be found. Please try again."
                        ]
                    ];
                }
            break;
            case "LOGOUT_APP":
                Auth::logout();
                $response = [
                    [
                        "key" => "app.display.path",
                        "value" => "/"
                    ]
                ];
            break;
        }
        return json_encode($response);
    }

    /**
    * Fetch App
    *
    * @function fetchApp
    */
    private function fetchApp($site, $url)
    {
        $app = [];
        $basePath = explode("/", $url->path)[1];
        if(Auth::check()) {
            $user = Auth::user();
            $userPaths = [
                "dashboard",
                "preview",
            ];
            if(in_array($basePath, $userPaths)) {
                if ($basePath === "dashboard") {
                    $app['display']['path'] = $url->path;
                }
                else {
                    $app['display']['path'] = $url->path;
                }
            } 
            else {
                $app['display']['path'] = "/dashboard/get-started";
            }
            $app['user'] = [
                "name" => $user->name,
                "email" => $user->email,
                "type" => $user->type
            ];
            $app['messages'] = [
                "login" => "",
                "submit" => ""
            ];
        }
        else {
            $guestPaths = [
                "login",
                "preview",
                "try",
            ];
            if(in_array($basePath, $guestPaths)) {
                $app['display']['path'] = $url->path;
            } 
            else {
                $app['display']['path'] = "/";
            }
            $app['user'] = [
                "type" => "guest"
            ];
            $app['messages'] = [
                "login" => "",
                "submit" => ""
            ];
        }
        return $app;
    }

    /**
    * Fetch Site
    *
    * @function fetchSite
    * @returns {object}
    */
    private function fetchSite($url)
    {
        $site = Helper::fetchSite($this->previews, $url);
        return $site;
    }
}
