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
use App\Helpers\Translate;

use App\Models\Sites;
use App\Models\User;

class ReactController extends Controller
{
    /**
    * Constructor
    *
    * @requires Request
    * @requires Sites
    */
    public function __construct(Request $request, Sites $sites, User $user)
    {
        $this->app = app();
        $this->request = $request;
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
            case "ADMIN_FETCH_NEW":
                $data = json_decode($this->request->input('data'));
                $seed = Locu::fetchSeed($data->url);
                $site = Translate::One($seed);
                $response = [
                    [
                        "key" => "admin.working.url",
                        "value" => explode("/", explode("www.", $data->url)[1])[0]
                    ],
                    [
                        "key" => "site",
                        "value" => $site
                    ]
                ];
            break;
            case "ADMIN_SAVE":
                // Get the site to save
                $data = json_decode($this->request->input('data'));
                $save = $data->content->site;
                // Check to see if it already exists in the db
                if (!is_null($this->sites->find($save->meta->id))) {
                    $current = $this->sites->find($save->meta->id);
                }
                else {
                    $current = new $this->sites;
                }
                // Save the new content
                $current->domain = $data->content->admin->working->url;
                $current->versions = [
                    "active" => [
                        "meta" => $save->meta,
                        "theme" => $save->theme,
                        "props" => $save->props
                    ]
                ];
                $current->save();
                // Build the url to retrieve the freshly saved site from the db
                $url = json_decode(json_encode([
                    "domain" => $data->content->admin->working->url,
                    "path" => "/"
                ]));
                // Build the response
                $response = [
                    [
                        "key" => "site",
                        "value" => $this->fetchSite($url)
                    ]
                ];
            break;
            case "INITIAL_ADMIN":
                $url = Helper::fetchURL(json_decode($this->request->input('url')), $this->sites);
                $response = [
                    [
                        "key" => "load",
                        "value" => "initial"
                    ],
                    [
                        "key" => "admin",
                        "value" => $this->fetchAdmin(json_decode($this->request->input('url')))
                    ],
                    [
                        "key" => "app",
                        "value" => $this->fetchApp(json_decode($this->request->input('url')))
                    ],
                    [
                        "key" => "site",
                        "value" => $this->fetchSite(json_decode($url))
                    ]
                ];
            break;
            case "INITIAL_APP":
                $url = Helper::fetchURL(json_decode($this->request->input('url')), $this->sites);
                $response = [
                    [
                        "key" => "load",
                        "value" => "initial"
                    ],
                    [
                        "key" => "app",
                        "value" => $this->fetchApp(json_decode($this->request->input('url')))
                    ],
                    [
                        "key" => "site",
                        "value" => $this->fetchSite(json_decode($url))
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
            case "LOGIN_ADMIN":
                $data = $this->request->input('data');
                Auth::attempt(['email' => $data['email'], 'password' => $data['password']], true);
                $response = [
                    [
                        "key" => "admin",
                        "value" => $this->fetchAdmin(json_decode($this->request->input('url')))
                    ]
                ];
            break;
            case "LOGOUT_ADMIN":
                Auth::logout();
                $response = [
                    [
                        "key" => "admin",
                        "value" => $this->fetchAdmin(json_decode($this->request->input('url')))
                    ]
                ];
            break;
        }
        return json_encode($response);
    }

    /**
    * Fetch Admin
    *
    * @function fetchAdmin
    */
    private function fetchAdmin($url)
    {
        $auto = [
            "display" => [
                "path" => "login"
            ]
        ];
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->admin) {
                return [
                    "display" => [
                        "path" => "dashboard",
                        "edit" => "false"
                    ],
                    "working" => [
                        "url" => "false"
                    ]
                ];
            }
            else {
                return $auto;
            }
        }
        else {
            return $auto;
        }
        
    }

    /**
    * Fetch App
    *
    * @function fetchApp
    */
    private function fetchApp($url)
    {
        $app = [];
        if(Auth::check()) {
            $user = Auth::user();
            $userPaths = [
                "/dashboard",
                "/dashboard/preview",
                "/dashboard/edit",
                "/dashboard/profile",
                "/dashboard/billing"
            ];
            if(in_array($url->path, $userPaths)) {
                $app['display']['path'] = $url->path;
            } 
            else {
                $app['display']['path'] = "/dashboard";
            }
            $app['user'] = [
                "name" => $user->name,
                "email" => $user->email
            ];
            $app['messages'] = [
                "login" => ""
            ];
        }
        else {
            $guestPaths = [
                "/",
                "/login",
                "/try"
            ];
            if(in_array($url->path, $guestPaths)) {
                $app['display']['path'] = $url->path;
            } 
            else {
                $app['display']['path'] = "/";
            }
            $app['messages'] = [
                "login" => ""
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
        $site = Helper::fetchSite($this->sites, $url);
        return $site;
    }
}
