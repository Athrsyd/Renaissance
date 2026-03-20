<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Log;
class UserController extends Controller
{
    public function register(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "name" => "required|string",
            "email" => "email|required",
            "photo_path" => "string|nullable",
            "password" => "required",
            // 'role' => 'string|required'
        ]);

        if ($validate->fails()) {
            return response()->json([
                "message" => "Register failed",
            ], 400);
        };

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "photo_path" => $request->photo_path,
            "password" => Hash::make($request->password),
            // "role" => $request->     ,
        ]);

        return response()->json([
            "message" => "Registrasi berhasil! Silahkan Login",
            "data" => $user
        ], 200);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                "message" => "Invalid Login credentials"
            ], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            "message" => "Login Berhasil!",
            "data" => $user,
            "token" => $token
        ], 200);
    }
    public function updateProfile(Request $request)
    {
        $user = $request->user();
        
        // ========== DEBUG ==========
        Log::info('Update Profile Request:', [
            'has_photo' => $request->hasFile('photo'),
            'photo_file' => $request->file('photo'),
            'all_files' => $request->allFiles(),
            'all_data' => $request->all()
        ]);

        $validate = Validator::make($request->all(), [
            "name" => "string|nullable",
            "photo" => "image|mimes:jpeg,png,jpg,gif|max:2048|nullable",
        ]);

        if ($validate->fails()) {
            return response()->json([
                "message" => "Update profile failed",
                "errors" => $validate->errors()
            ], 400);
        }

        // Handle upload
        if ($request->hasFile('photo')) {
            Log::info('Photo file detected, uploading...');
            
            if ($user->photo_path) {
                Storage::disk('public')->delete($user->photo_path);
            }
            
            $file = $request->file('photo');
            $filename = time() . "_" . uniqid() . "." . $file->getClientOriginalExtension();
            $path = $file->storeAs('profiles', $filename, 'public');
            
            Log::info('File uploaded successfully:', ['path' => $path]);
            
            $user->photo_path = $path;
        } else {
            Log::warning('No photo file detected in request');
        }

        if ($request->has('name')) {
            $user->name = $request->name;
        }

        $user->save();

        return response()->json([
            "message" => "Profile updated successfully!",
            "data" => $user
        ], 200);
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            "message" => "Log out berhasil!"
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json($request->user());  // ← Accessor otomatis jalan
    }
}
