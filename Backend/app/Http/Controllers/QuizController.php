<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\LayarMateri;

class QuizController extends Controller
{

    public function index($id_layar_materi)
    {
        $layar = LayarMateri::findOrFail($id_layar_materi);
        $quizzes = $layar->quizzes()->orderBy('urutan')->get();
        return response()->json($quizzes);
    }

    public function show(Quiz $quiz)
    {
        $quiz->load('opsiJawabans');
        return response()->json($quiz);
    }
}
