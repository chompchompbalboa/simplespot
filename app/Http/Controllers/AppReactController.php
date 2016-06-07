<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ReactController;
use App\Helpers\Helper;

use App\Seed;
use App\Invite;

class AppReactController extends ReactController
{
    protected $container = [
        'width' => [
            'sm'=> '1',
            'md'=> '1',
            'lg'=> '0.75'
        ]
    ];
    //-------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Public functions
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Private functions
    //-------------------------------------------------------------------------
}
