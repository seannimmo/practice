<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;

class BookController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }

    public function index()
    {
        $books = \App\Book::paginate(5);
        

        return view('books/index', compact('books'));
    }

    public function create()
    {

        return view('books/create');
    }

    public function store(Request $request)
    {
        $book = new \App\Book();
        $book->title = $request->title;
        $book->authors = $request->authors;
        $book->image = $request->image;
        $book->publisher_id = $request->publisher_id;
        $book->save();
        
        return redirect(action('BookController@index'));
        
    }

    // public function edit($id)
    // {

    // }

    public function edit($id)
    {
        $book = Book::find($id);
        $book->title = $request->title;
        $book->authors = $request->authors;
        $book->image = $request->image;
        $book->publisher_id = $request->publisher_id;

        $book->save();

        return redirect(action('BookController@index'));


    }

}
