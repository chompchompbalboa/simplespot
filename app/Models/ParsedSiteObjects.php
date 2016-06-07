<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class ParsedSiteObjects extends Eloquent
{
    protected $collection = 'parsedsiteobjects';
    protected $primaryKey = '_id';
}
