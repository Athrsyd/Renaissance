<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ModulBelajar;

class ModulBelajarController extends Controller
{
    public function index(){
        $modules = ModulBelajar::with('mapel')->get();

        return response()->json([
            'message'=>'Berikut list modul',
            'data'=>$modules
        ]); 
    }
}
