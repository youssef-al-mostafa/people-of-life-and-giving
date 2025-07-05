<?php

use App\Http\Controllers\WebsiteController;
use App\Http\Controllers\DebugController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

// Force HTTPS in production
if (env('APP_ENV') == 'production') {
    URL::forceScheme('https');
}

// Debug routes (add CSRF exemption if needed)
Route::prefix('api')->middleware('web')->group(function () {
    Route::post('/debug-log', [DebugController::class, 'debugLog']);
    Route::post('/error-log', [DebugController::class, 'errorLog']);
    Route::get('/app-state', [DebugController::class, 'getAppState']);
    Route::get('/check-inertia', [DebugController::class, 'checkInertiaSetup']);
});

// Test route to verify Inertia is working
Route::get('/test-inertia', function () {
    Log::info('Direct Inertia test route called');
    Log::info('Middleware on route: ', Route::current()->middleware());

    return Inertia::render('website/home/page', [
        'pageData' => ['attrs' => ['test' => 'direct route test']],
        'debug' => 'direct-route-test'
    ]);
})->middleware('web');

// Main website routes with explicit middleware
Route::middleware('web')->group(function () {
    Route::get('/', [WebsiteController::class, 'home'])->name('home');
    Route::get('/about', [WebsiteController::class, 'about'])->name('about');
    Route::get('/content/{ref}', [WebsiteController::class, 'show']);
});

// Include other route files
require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
