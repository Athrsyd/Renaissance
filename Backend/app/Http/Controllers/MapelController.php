<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mapel;

class MapelController extends Controller
{
    public function index(){
    
    $Mapel = Mapel::all();
    return response()->json([
        'message'=>"berikut list mapel",
        'data'=>$Mapel
    ]);
    }
}
