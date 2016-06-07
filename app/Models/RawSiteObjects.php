<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class RawSiteObjects extends Eloquent
{
    protected $collection = 'rawsiteobjects';
    protected $primaryKey = '_id';
}
