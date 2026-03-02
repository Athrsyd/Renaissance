<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "name" => "required|string",
            "email" => "email|required",
            "password" => "required",
            // 'role' => 'string|required'
        ]);

        if ($validate->fails()) {
            return response()->json([
                "message" => "Register failed",
            ], 400);
        }
        ;

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
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

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            "message" => "Log out berhasil!"
        ]);
    }

    public function profile(Request $request){
        return response()->json($request->user());
    }
}
