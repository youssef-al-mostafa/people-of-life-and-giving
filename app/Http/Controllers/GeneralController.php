<?php

namespace App\Http\Controllers;

use App\Models\General;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class GeneralController extends Controller
{
    public function index(): Response
    {
        $generalSettings = General::getGeneralSettings();

        Log::info('General Settings:', ['generalSettings' => $generalSettings]);

        return Inertia::render('general', [
            'generalSettings' => $generalSettings
        ]);
    }

    public function getGeneralData(): JsonResponse
    {
        try {
            $generalData = Cache::remember('general_data', 300, function () {
                return General::select('title', 'value')
                    ->get()
                    ->pluck('value', 'title')
                    ->toArray();
            });

            return response()->json([
                'success' => true,
                'data' => $generalData
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching general data:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch general data',
                'data' => []
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'facebook' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'youtube' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'primaryPhone' => 'nullable|string|max:20',
            'secondaryPhone' => 'nullable|string|max:20',
        ]);

        foreach ($validatedData as $field => $value) {
            General::updateOrCreate(
                ['title' => $field],
                ['value' => $value]
            );
        }

        Cache::forget('general_data');

        return back()->with('success', 'General settings updated successfully');
    }
}
