<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\AuthController;



// AUTH
Route::prefix('v1/auth')->group(function(){
    Route::post('/register',[AuthController::class,'register']);
    Route::post('/login',[AuthController::class,'login']);
    Route::post('/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');
});



// NOTES
Route::prefix('v1')->middleware('auth:sanctum')->group(function(){
    Route::get('/notes',[NoteController::class,'index']);
    Route::get('/notes/{id}',[NoteController::class,'show']);
    Route::post('/notes',[NoteController::class,'store']);
    Route::put('/notes/{id}',[NoteController::class],'update');
    Route::delete('/notes/{id}',[NoteController::class,'destroy']);
});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




