<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('frontend.homepage');
});



Route::get('login', function () {
    return view('admin.auth.login');
})->name('login');
Route::get('dashboard', function () {
    return view('admin.dashboard');
})->name('admin.dashboard');

Route::view('/usa', 'frontend.exaltusa')->name('usa');

