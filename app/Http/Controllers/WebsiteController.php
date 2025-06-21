<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WebsiteController extends Controller
{
    private function buildPageData(string $ref): array
    {
        $content = Content::where('ref', $ref)->first();

        return [
            'attrs' => $content?->attrs ?? [],
        ];
    }
    public function home(): Response
    {
        return Inertia::render('home/page', [
            'pageData' => $this->buildPageData('page.home')
        ]);
    }

    public function about()
    {
        return Inertia::render('about/page', [
            'pageData' => $this->buildPageData('page.about')
        ]);
    }
    public function show($ref)
    {
        $content = Content::where('ref', $ref)->first();
        return response()->json($content);
    }
}
