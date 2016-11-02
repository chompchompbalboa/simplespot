<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Previews extends Eloquent
{
    protected $collection = 'previews';
    protected $primaryKey = '_id';
}
