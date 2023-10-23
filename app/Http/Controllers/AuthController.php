<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email','password']);
        if(!Auth::attempt($credentials)){
            return response()->json([
                'message'=> 'Unauthorized'
            ], 401);
        }

        $user = $request->user();
        $token = $user->createToken('Personal Access Token')->plainTextToken;

        return response()->json([
            'accessToken' => $token,
            'tokenType' => 'Bearer'
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|string',
            'confirm_password' => 'required|same:password',
        ]);

        $user = new User([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> bcrypt($request->password),
        ]);

        if ($user->save()){
            $token = $user->createToken('Personal Access Token')->plainTextToken;

            return response()->json([
                'message' => 'User successfully created!',
                'accessToken' => $token,
            ],201);
        } else {
            return response()->json(['error' => 'Please provide correct details']);
        }
    }

    public function user (Request $request) 
    {
        return response()->json($request->user());
    }
}
