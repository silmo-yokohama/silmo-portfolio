<?php

use App\Http\Controllers\Front\HomeController;
use Illuminate\Support\Facades\Route;

Route::name('front.')->group(function() {
  Route::get('/' ,[HomeController::class ,'index'])->name('top');
});

require __DIR__.'/auth.php';
