<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\ReactController;

use App\Helpers\Helper;

class SiteReactController extends ReactController
{
    public function display($data, $info)
    {
        $display = Helper::fetchJSON('/json/display/display_site.json');
        $display->site->path = $data->path;
        return $display;
    }
}
