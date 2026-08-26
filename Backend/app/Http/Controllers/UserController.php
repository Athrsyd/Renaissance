<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\ModulBelajar;
use App\Models\User;
use App\Models\UserModulProgress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Registrasi user baru.
     * Validasi diperkuat via RegisterRequest:
     *   - email harus unique (sebelumnya hanya dicek di DB level)
     *   - password min 8 karakter + konfirmasi
     * Response tidak mengekspos field internal (timestamps, email_verified_at).
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => $request->password, // Model sudah cast 'hashed'
        ]);

        // Inisialisasi progress semua modul — gunakan insert() bukan foreach create()
        $progressRecords = ModulBelajar::all()->map(fn($modul) => [
            'user_id'         => $user->id,
            'modul_id'        => $modul->id,
            'progress_persen' => 0,
            'is_selesai'      => false,
            'soal_selesai'    => json_encode([]),
            'created_at'      => now(),
            'updated_at'      => now(),
        ])->toArray();

        if (!empty($progressRecords)) {
            UserModulProgress::insert($progressRecords);
        }

        // Buat token langsung agar user tidak perlu login ulang
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Registrasi berhasil!',
            'data'    => [
                'id'    => $user->id,
                'kelas' => $user->kelas,
                'name'  => $user->name,
                'email' => $user->email,
            ],
            'token'   => $token,
        ], 201);
    }

    /**
     * Login dan buat token Sanctum.
     */
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Email atau password salah.',
            ], 401);
        }

        $user  = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login berhasil!',
            'data'    => [
                'id'    => $user->id,
                'kelas' => $user->kelas,
                'name'  => $user->name,
                'email' => $user->email,
            ],
            'token'   => $token,
        ], 200);
    }

    /**
     * Hapus semua token user (logout dari semua device).
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logout berhasil.',
        ], 200);
    }

    /**
     * Kembalikan profil user — hanya field yang dibutuhkan frontend.
     */
    public function profile(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'id'    => $user->id,
            'kelas' => $user->kelas,
            'name'  => $user->name,
            'email' => $user->email,
        ], 200);
    }
}
