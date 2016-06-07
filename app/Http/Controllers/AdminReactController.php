<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ReactController;

use App\Helpers\Helper;
use App\Helpers\Parser;
use App\Helpers\Translator;

use App\Models\Seed;
use App\Models\Invite;
use App\Models\ParsedSiteObjects;
use App\Models\RawSiteObjects;

class AdminReactController extends ReactController
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
