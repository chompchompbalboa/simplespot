<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Invite extends Eloquent
{
    protected $collection = 'invites';
    protected $primaryKey = '_id';
}
