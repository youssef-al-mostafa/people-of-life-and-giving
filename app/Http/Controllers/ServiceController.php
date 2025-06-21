<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index() : Response{
        return Inertia::render('services/page');
    }

    public function create() : Response{
        return Inertia::render('services/create');
    }

    public function store() : Response{
        return Inertia::render('services/page');
    }
}
