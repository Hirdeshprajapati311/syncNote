<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{


    public function register(Request $request){
        $validate=$request->validate([
            'name'=>['required','string','max:255'],
            'email'=>['required','email','unique:users,email'],
            'password'=>['required','string','min:8'],
        ]);

        $user=User::create([
            'name'=>$validate['name'],
            'email'=>$validate['email'],
            'password'=>Hash::make($validate['password']),
        ]);

        return response()->json([
            'message'=>'User registered successfully',
            'user'=>$user,
        ],201);
    }

    public function login(Request $request){
        $credentials=$request->validate([
            'email'=>['required','email'],
            'password'=>['required','string'],
        ]);

        if(!auth()->attempt($credentials)){
            return response()->json([
                'message'=>'Invalid Credentials',
            ],401);
        }

        $request->session()->regenerate();
        return response()->json([
            'message'=>'Login Successfull',
            'user'=>$request->user(),
        ]);
    }

    public function logout(Request $request){
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message'=>'Logout successful'
        ]);
    }
}
