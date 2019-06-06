<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class MovieController extends Controller
{
    public function index()
    {
        //$top_rated = view('movie/top-rated')
        $view = view('movie/index', [
            'top-rated_view' => $top-rated
        ]);
        return $view;
    }

    // public function index2()
    // {
    //     return 
    // }
}
