<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Cities extends Eloquent
{
    protected $collection = 'cities';
    protected $primaryKey = '_id';
}
