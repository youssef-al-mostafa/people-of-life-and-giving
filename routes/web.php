<?php

use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WebsiteController::class, 'home'])->name('home');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
