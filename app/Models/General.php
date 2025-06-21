<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class General extends Model
{
    protected $table = 'general';

    protected $fillable = ['title', 'value'];

    public static function getGeneralSettings(): array
    {
        $settings = self::whereIn('title', [
            'facebook',
            'instagram',
            'youtube',
            'twitter',
            'email',
            'primary_phone',
            'secondary_phone',
        ])->get();

        $result = [];
        foreach ($settings as $setting) {
            $result[$setting->title] = $setting->value;
        }

        return $result;
    }
}
