<?php

namespace App\Http\Controllers;

use App\Models\Teman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TemanController extends Controller
{

    public function index()
    {
        $teman = Teman::where('user_id', Auth::id())
            ->with('teman') 
            ->get();

        return response()->json($teman);
    }

    public function store(Request $request)
    {
        $validasi = Validator::make($request->all(), [
            'teman_id' => "required|exists:users,id"
        ]);

        if ($validasi->fails()) {
            return response()->json(["message" => "User not found"], 404);
        }

        $teman = Teman::create([
            'user_id' => Auth::id(),    // ← ID user yang login
            'teman_id' => $request->teman_id, // ← tambahkan ini!
        ]);

        return response()->json([
            "message" => "Teman berhasil ditambahkan",
            "data" => $teman
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Teman $teman)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teman $teman)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teman $teman)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teman $teman)
    {
        $teman->delete();
        return response()->json([
            'message' => 'Teman dihapus'
        ], 200);
    }
}
