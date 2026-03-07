<?php

// use Illuminate\Http\Request;
use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TemanController;

Route::prefix('v1/')->group(function () {
    Route::post('auth/register', [UserController::class, 'register']);
    Route::post('auth/login', [UserController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('auth/profile', [UserController::class, 'profile']);
        Route::post('auth/logout', [UserController::class, 'logout']);

        // Community
        Route::get('komunitas/teman', [TemanController::class, 'index']);
        Route::post('komunitas/teman', [TemanController::class, 'store']);
        Route::delete('komunitas/teman/{teman}', [TemanController::class, 'destroy']);
    
        // Chat
        Route::get('chat/{userId}', [ChatController::class, 'index']);
        Route::post('chat/text', [ChatController::class, 'sendText']);
        Route::delete('chat/{message}', [ChatController::class, 'destroy']);
    });
});


