<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bab;
use App\Models\ModulBelajar;

class BabController extends Controller
{

    public function index($id_modul)
    {
        $modul = ModulBelajar::findOrFail($id_modul);
        $babs = $modul->babs()->orderBy('urutan')->get();
        return response()->json($babs);
    }

    public function show(Bab $bab)
    {
        $bab->load('layarMateri');
        return response()->json($bab);
    }

}
