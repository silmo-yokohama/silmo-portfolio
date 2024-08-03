<?php

namespace App\Http\Controllers\Front;

use App\Services\GraphQL\Skills;
use App\Http\Controllers\Controller;
use App\Services\GraphQL\NewsStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  function index(Request $request) {
    $news = NewsStatus::get();
    $skills = Skills::get();

    $newsJson = json_decode($news);
    $skillsJson = json_decode($skills);

    return Inertia::render('Home' ,[
      'news' => $newsJson,
      'skills' => $skillsJson
    ]);
  }
}
