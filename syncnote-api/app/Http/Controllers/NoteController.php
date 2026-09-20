<?php

namespace App\Http\Controllers;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    //
    public function index(){
        $notes = auth()->user()->notes;
        return response()->json([
            'notes'=>$notes
        ]);
    }

    public function show(string $id){
        return $id->note;
    }

    public function store(Request $request){

    }
}
