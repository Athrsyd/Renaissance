<?php

// use Illuminate\Http\Request;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\MapelController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TemanController;
use App\Http\Controllers\ModulBelajarController;
use App\Http\Controllers\BabController;
use App\Http\Controllers\LayarMateriController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\OpsiJawabanController;
use App\Http\Controllers\UserModulProgressController;
use App\Http\Controllers\CommunityController;

Route::prefix('v1/')->group(function () {
    Route::post('auth/register', [UserController::class, 'register']);
    Route::post('auth/login', [UserController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('auth/profile', [UserController::class, 'profile']);
        Route::delete('auth/logout', [UserController::class, 'logout']);

        // // Community
        // Route::get('komunitas/teman', [TemanController::class, 'index']);
        // Route::post('komunitas/teman', [TemanController::class, 'store']);
        // Route::delete('komunitas/teman/{teman}', [TemanController::class, 'destroy']);

        // // Chat
        // Route::get('chat/{userId}', [ChatController::class, 'index']);
        // Route::post('chat/text', [ChatController::class, 'sendText']);
        // Route::delete('chat/{message}', [ChatController::class, 'destroy']);

        // Ambil List Mapel
        Route::get('/mapel', [MapelController::class, 'index']);

        // Ambil List Modul
        Route::get('/modules', [ModulBelajarController::class, 'index']);

        Route::get('/modul/{id_modul}/bab', [BabController::class, 'index']);
        Route::get('/bab/{bab}', [BabController::class, 'show']);

        Route::get('/bab/{id_bab}/layar-materi', [LayarMateriController::class, 'index']);
        Route::get('/layar-materi/{layarMateri}', [LayarMateriController::class, 'show']);

        Route::get('/layar-materi/{id_layar_materi}/quiz', [QuizController::class, 'index']);
        Route::get('/quiz/{quiz}', [QuizController::class, 'show']);

        Route::get('/quiz/{id_quiz}/opsi-jawaban', [OpsiJawabanController::class, 'index']);
        Route::get('/opsi-jawaban/{opsiJawaban}', [OpsiJawabanController::class, 'show']);

        // COntinue Learning
        Route::post('/modul/{modul_id}/progress', [UserModulProgressController::class, 'upsertProgress']);
        Route::get('/dashboard/continue-learning', [UserModulProgressController::class, 'index']);

        // KOMUNITAS (GROUP CHAT)
        Route::get('/communities', [CommunityController::class, 'index']);
        Route::post('/communities', [CommunityController::class, 'store']);
        Route::post('/communities/{community}/members', [CommunityController::class, 'addMember']);
        Route::delete('/communities/{community}', [CommunityController::class, 'destroy']);

        // CHAT KOMUNITAS
        Route::get('/communities/search', [CommunityController::class, 'search']);
        Route::post('/communities/{community}/join', [CommunityController::class, 'join']);
        Route::post('/communities/{community}/leave', [CommunityController::class, 'leave']);


        Route::get('/communities/{community}/messages', [ChatController::class, 'getMessages']);
        Route::post('/communities/{community}/messages', [ChatController::class, 'sendMessage']);
        Route::delete('/messages/{message}', [ChatController::class, 'destroy']);
    });
});
