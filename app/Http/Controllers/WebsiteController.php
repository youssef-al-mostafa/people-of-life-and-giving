<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;

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
        // Debug: Log that we're in the controller
        Log::info('WebsiteController@home called');

        // Debug: Check if this is an Inertia request
        Log::info('Is Inertia request: ' . (request()->header('X-Inertia') ? 'YES' : 'NO'));

        // Debug: Check middleware stack
        Log::info('Middleware stack', request()->route()->middleware());

        try {
            $response = Inertia::render('website/home/page', [
                'pageData' => $this->buildPageData('page.home'),
                'debug_info' => [
                    'is_inertia' => request()->header('X-Inertia') ? true : false,
                    'middleware' => request()->route()->middleware(),
                    'timestamp' => now()->toISOString()
                ]
            ]);

            Log::info('Inertia::render succeeded');
            return $response;

        } catch (\Exception $e) {
            Log::error('Inertia::render failed: ' . $e->getMessage());
            throw $e;
        }
    }

    public function about()
    {
        return Inertia::render('website/about/page', [
            'pageData' => $this->buildPageData('page.about')
        ]);
    }

    public function show($ref)
    {
        $content = Content::where('ref', $ref)->first();
        return response()->json($content);
    }
}
