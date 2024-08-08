<?php

namespace App\Http\Controllers\Front;

use App\Services\GraphQL\Skills;
use App\Http\Controllers\Controller;
use App\Services\GraphQL\NewsStatus;
use App\Services\GraphQL\Works;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  function index(Request $request) {
    $news = NewsStatus::get();
    $skills = Skills::getBottomLayer();
    $works = Works::getNewWorks();

    $newsJson = json_decode($news);
    $skillsJson = json_decode($skills);
    $worksJson = json_decode($works);

    return Inertia::render('Home' ,[
      'news' => $newsJson,
      'skills' => $skillsJson,
      'works' => $worksJson
    ]);
  }
}
