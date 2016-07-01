<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Modules extends Eloquent
{
    protected $collection = 'modules';
    protected $primaryKey = '_id';
}
