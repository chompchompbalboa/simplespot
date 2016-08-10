<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Auth;

use App\Helpers\Helper;

use App\Http\Requests;
use App\Http\Controllers\ReactController;

use App\Models\User;

class AppReactController extends ReactController
{
    public function display($data, $info)
    {
        $display = Helper::fetchJSON('/json/display/display_app.json');
        $display->app->path = $data->path;
        return $display;
    }

    public function login($data)
    {
        if(Auth::attempt(['email' => $data->email, 'password' => $data->password], true)) {
            $changes = [
                ["key" => "app.path", "value" => "/dashboard"],
                ["key" => "app.user.loggedIn", "value" => "true"],
                ["key" => "app.user.email", "value" => $data->email]
            ];
            return $changes;
        }
    }

    public function newSite($data)
    {
        // Fetch a new seed
        $seed = $this->locuSeed($data);
        // Translate the seed to the current theme
        $site = $this->themeTranslator->translate($seed, $data->theme);
        // Return the changes
        $changes = [
            ["key" => "versions.active", "value" => $site]
        ];
        return $changes;
    }

    private function locuSeed($data)
    {
        $query = [
            'api_key' => '75c84c82c44bfb658d22ee1b416cf7eb0670bcc1',
            'fields' => [
                'categories',
                'contact',
                'location',
                'open_hours',
                'name'
            ],
            'venue_queries' => [
                [
                    'website_url' => $data->url
                ]
            ]
        ];
        $query = json_encode($query);
        //dd($query);
        $ch = curl_init('https://api.locu.com/v2/venue/search');                                                                      
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);                                                                  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
        curl_setopt($ch, CURLOPT_HTTPHEADER, [                                                                         
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($query)]);
        $locuSeed = json_decode(curl_exec($ch));
        dd($locuSeed);
        return $locuSeed;
    }

    public function logout($data)
    {
        if(Auth::logout()) {
            $changes = [
                ["key" => "app.path", "value" => "/"]
            ];
            return $changes;
        }
    }

    public function register($data)
    {
        if(!$this->user->where('email', '=', $data->email)->exists()) {
            $this->user->create([
                "name" => "",
                "email" => $data->email,
                "password" => bcrypt($data->password)
            ]);
            if(Auth::attempt(['email' => $data->email, 'password' => $data->password], true)) {
                $changes = [
                    ["key" => "app.path", "value" => "/dashboard"],
                    ["key" => "app.AppHome.submitText", "value" => "Login/Register"]
                ];
                return $changes;
            }
        }
    }

    public function doesUserExist($data)
    {
        if($this->user->where('email', '=', $data->email)->exists()) {
            $change = "Login";
        }
        else {
            $change = "Register";
        }
        $changes = [
            ["key" => "app.AppHome.submitText", "value" => $change]
        ];
        return $changes;
    }
}
