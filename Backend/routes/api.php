<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::prefix('v1/')->group(function () {
    Route::post('auth/register', [UserController::class, 'register']);
    Route::post('auth/login', [UserController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('auth/profile', [UserController::class, 'profile']);
        Route::post('auth/logout', [UserController::class, 'logout']);
    });
});
