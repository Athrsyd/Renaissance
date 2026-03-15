<?php

namespace App\Http\Controllers;

use App\Models\OpsiJawaban;
use App\Models\Quiz;
use Illuminate\Http\Request;

class OpsiJawabanController extends Controller
{
    // Tampil semua opsi dari quiz tertentu
    public function index($id_quiz)
    {
        $quiz = Quiz::findOrFail($id_quiz);
        $opsi = $quiz->opsiJawabans()->orderBy('urutan')->get();
        return response()->json($opsi);
    }

    // Tampil detail opsi jawaban tertentu
    public function show(OpsiJawaban $opsiJawaban)
    {
        return response()->json($opsiJawaban);
    }
}
