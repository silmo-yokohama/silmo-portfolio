<?php

namespace App\Http\Controllers\Front;

use App\Services\GraphQL\Skills;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index(Request $request) {
      $skills = Skills::get();
      $json = json_decode($skills);

      return Inertia::render('Home' ,[
        'skills' => $json
      ]);
    }
}
