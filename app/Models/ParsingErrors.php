<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class ParsingErrors extends Eloquent
{
    protected $collection = 'parsingerrors';
    protected $primaryKey = '_id';
}
