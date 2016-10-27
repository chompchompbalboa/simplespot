<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class ReadyForInvite extends Eloquent
{
    protected $collection = 'readyForInvite';
    protected $primaryKey = '_id';
}
