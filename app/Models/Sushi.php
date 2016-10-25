<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Sushi extends Eloquent
{
    protected $collection = 'sushi';
    protected $primaryKey = '_id';
}
