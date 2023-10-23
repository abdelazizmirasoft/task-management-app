<?php

use App\Http\Controllers\Api\V1\TaskController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(["prefix"=> "auth"], function () {
    Route::post("login", [AuthController::class, 'login']);
    Route::post("register", [AuthController::class, 'register']);
    Route::group(['middleware'=> 'auth:sanctum'], function () {
        Route::get('logout', [AuthController::class,'logout']);
        Route::get('user', [AuthController::class,'user']);
    });
});

Route::group(['prefix'=> 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function () {
    Route::apiResource('tasks', TaskController::class)->middleware('auth:sanctum');
});