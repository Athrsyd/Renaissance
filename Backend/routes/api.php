<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ModulBelajarController;
use App\Http\Controllers\UserModulProgressController;
use App\Http\Controllers\CommunityController;

Route::prefix('v1/')->group(function () {
    // ===== PUBLIC ROUTES =====
    Route::post('auth/register', [UserController::class, 'register']);
    Route::post('auth/login', [UserController::class, 'login']);

    // ===== PROTECTED ROUTES =====
    Route::middleware('auth:sanctum')->group(function () {
        // Auth
        Route::get('auth/profile', [UserController::class, 'profile']);
        Route::delete('auth/logout', [UserController::class, 'logout']);

        // Modules
        Route::get('modules', [ModulBelajarController::class, 'index']);

        // Progress (Simplified)
        Route::get('progress', [UserModulProgressController::class, 'index']);
        Route::put('progress/{modul_id}', [UserModulProgressController::class, 'upsertProgress']);

        // Communities
        Route::get('communities/search', [CommunityController::class, 'search']);
        Route::get('communities', [CommunityController::class, 'index']);
        Route::post('communities', [CommunityController::class, 'store']);
        Route::post('communities/{community}/join', [CommunityController::class, 'join']);
        Route::post('communities/{community}/leave', [CommunityController::class, 'leave']);
        Route::post('communities/{community}/members', [CommunityController::class, 'addMember']);
        Route::delete('communities/{community}', [CommunityController::class, 'destroy']);

        // Chat
        Route::get('communities/{community}/messages', [ChatController::class, 'getMessages']);
        Route::post('communities/{community}/messages', [ChatController::class, 'sendMessage']);
        Route::delete('messages/{message}', [ChatController::class, 'destroy']);
    });
});
