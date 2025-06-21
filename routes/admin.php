<?php

use App\Http\Controllers\GeneralController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('admins/all', function () {
        return Inertia::render('admins/admins');
    })
        ->name('admin.all');
    Route::post('/admin/add', [UserController::class, 'addAdmin'])
        ->name('admin.add');
    Route::delete('/admin/delete', [UserController::class, 'deleteAdmin'])
        ->name('admin.delete');
    Route::get('/admin/admins', [UserController::class, 'getAdmins'])
        ->name('admin.admins');
    Route::get('/admin/create', [UserController::class, 'createAdmin'])
        ->name('admin.create');
    Route::put('/admin/changePassword', [UserController::class, 'changePasswordAdmin'])
        ->name('admin.changePassword');

    Route::get('/services', [ServiceController::class, 'index'])
        ->name('services.index');
    Route::get('/services/create', [ServiceController::class, 'create'])
        ->name('services.create');
    Route::post('/services', [ServiceController::class, 'store'])
        ->name('services.store');

    Route::get('/general', [GeneralController::class, 'index'])
        ->name('general.index');
    Route::post('/general/store', [GeneralController::class, 'store'])
        ->name('general.store');
    Route::get('/api/general', [GeneralController::class, 'getGeneralData'])
        ->name('api.general.data');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/pages.php';
require __DIR__ . '/settings.php';
