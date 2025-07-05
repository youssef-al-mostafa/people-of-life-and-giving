<?php

use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

Route::get('/', [WebsiteController::class, 'home'])->name('home');

if (env('APP_ENV')) { URL::forceScheme('https'); }

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
