<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bab;
use App\Models\LayarMateri;

class LayarMateriController extends Controller
{
    public function index($id_bab)
    {
        $bab = Bab::findOrFail($id_bab);
        $layar = $bab->layarMateris()->orderBy('urutan')->get();
        return response()->json($layar);
    }

    public function show(LayarMateri $layarMateri)
    {
        $layarMateri->load('quizzes');
        return response()->json($layarMateri);
    }
}