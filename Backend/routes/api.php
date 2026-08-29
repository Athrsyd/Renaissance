<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\QuizTimeController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\ModulBelajarController;
use App\Http\Controllers\PlacementController;
use App\Http\Controllers\XpController;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\StreakController;
use App\Http\Controllers\TemanController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserModulProgressController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {

    // ── PUBLIC — rate limiting ──────────────────────────────────────────────
    Route::middleware('throttle:10,1')->group(function () {
        Route::post('auth/register', [UserController::class, 'register']);
        Route::post('auth/login',    [UserController::class, 'login']);
    });

    // ── PROTECTED ──────────────────────────────────────────────────────────
    Route::middleware('auth:sanctum')->group(function () {

        // Auth
        Route::get   ('auth/profile', [UserController::class, 'profile']);
        Route::delete('auth/logout',  [UserController::class, 'logout']);

        // Placement Test
        Route::put('placement/kelas',        [PlacementController::class, 'setKelas']);
        Route::put('placement/starting-bab', [PlacementController::class, 'setStartingBab']);
        Route::get('placement/status',       [PlacementController::class, 'status']);

        // XP & Level
        Route::get('xp',         [XpController::class, 'info']);
        Route::post('xp/tambah', [XpController::class, 'tambah']);

        // Modules & Soal
        Route::get('modules',                              [ModulBelajarController::class, 'index']);
        Route::get('modules/{modul}/soal',                 [SoalController::class, 'index']);
        Route::get('mapel/{mapel}/kelas/{kelas}/modules',  [SoalController::class, 'modulsByMapelKelas']);

        // Progress
        Route::get('progress',            [UserModulProgressController::class, 'index']);
        Route::put('progress/{modul_id}', [UserModulProgressController::class, 'upsertProgress']);

        // Progress kelas (indikator kiri bawah dashboard)
        Route::get('progress/kelas', [LeaderboardController::class, 'classProgress']);

        // Streak
        Route::get('streak', [StreakController::class, 'show']);

        // Waktu Pengerjaan Soal
        Route::get ('quiz-time', [QuizTimeController::class, 'index']);
        Route::post('quiz-time', [QuizTimeController::class, 'store']);

        // Leaderboard
        Route::get('leaderboard/streak',   [LeaderboardController::class, 'streak']);
        Route::get('leaderboard/progress', [LeaderboardController::class, 'progress']);
        Route::get('leaderboard/xp',       [LeaderboardController::class, 'xp']);

        // Teman
        Route::get   ('teman',         [TemanController::class, 'index']);
        Route::post  ('teman',         [TemanController::class, 'store']);
        Route::delete('teman/{teman}', [TemanController::class, 'destroy']);

        // Communities
        Route::get   ('communities/search',            [CommunityController::class, 'search']);
        Route::get   ('communities',                   [CommunityController::class, 'index']);
        Route::post  ('communities',                   [CommunityController::class, 'store']);
        Route::delete('communities/{community}',       [CommunityController::class, 'destroy']);
        Route::post  ('communities/{community}/join',  [CommunityController::class, 'join']);
        Route::post  ('communities/{community}/leave', [CommunityController::class, 'leave']);

        // Messages
        Route::middleware('community.member')->group(function () {
            Route::get ('communities/{community}/messages', [ChatController::class, 'getMessages']);
            Route::post('communities/{community}/messages', [ChatController::class, 'sendMessage']);
        });
        Route::delete('messages/{message}', [ChatController::class, 'destroy']);
    });
});