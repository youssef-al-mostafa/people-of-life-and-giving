<?php

use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\DebugController;
use Inertia\Inertia;

Route::get('/', [WebsiteController::class, 'home'])->name('home');

if (env('APP_ENV') == 'production') {
    URL::forceScheme('https');
}


Route::prefix('api')->group(function () {
    Route::post('/debug-log', [DebugController::class, 'debugLog']);
    Route::post('/error-log', [DebugController::class, 'errorLog']);
    Route::get('/app-state', [DebugController::class, 'getAppState']);
    Route::get('/check-inertia', [DebugController::class, 'checkInertiaSetup']);
});

Route::get('/debug-test', function () {
    return Inertia::render('home/page', [
        'debug' => true,
        'pageData' => [
            'attrs' => ['test' => 'value']
        ]
    ]);
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
