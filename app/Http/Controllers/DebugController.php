<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class DebugController extends Controller
{
    /**
     * Log debug messages from frontend
     */
    public function debugLog(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'level' => 'required|string|in:debug,info,warning,error',
            'message' => 'required|string',
            'data' => 'nullable',
            'url' => 'required|string',
            'userAgent' => 'required|string',
            'timestamp' => 'required|string'
        ]);

        $context = [
            'frontend_data' => $validated['data'],
            'url' => $validated['url'],
            'user_agent' => $validated['userAgent'],
            'frontend_timestamp' => $validated['timestamp'],
            'server_timestamp' => now()->toISOString(),
            'ip' => $request->ip(),
            'session_id' => session()->getId(),
        ];

        match($validated['level']) {
            'debug' => Log::debug('[FRONTEND DEBUG] ' . $validated['message'], $context),
            'info' => Log::info('[FRONTEND INFO] ' . $validated['message'], $context),
            'warning' => Log::warning('[FRONTEND WARNING] ' . $validated['message'], $context),
            'error' => Log::error('[FRONTEND ERROR] ' . $validated['message'], $context),
        };

        return response()->json(['status' => 'logged']);
    }

    /**
     * Log error messages from frontend
     */
    public function errorLog(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'message' => 'required|string',
            'stack' => 'nullable|string',
            'context' => 'required|string',
            'url' => 'required|string',
            'userAgent' => 'required|string',
            'timestamp' => 'required|string'
        ]);

        $context = [
            'error_stack' => $validated['stack'],
            'error_context' => $validated['context'],
            'url' => $validated['url'],
            'user_agent' => $validated['userAgent'],
            'frontend_timestamp' => $validated['timestamp'],
            'server_timestamp' => now()->toISOString(),
            'ip' => $request->ip(),
            'session_id' => session()->getId(),
        ];

        Log::error('[FRONTEND ERROR] ' . $validated['message'], $context);

        return response()->json(['status' => 'logged']);
    }

    /**
     * Get current application state for debugging
     */
    public function getAppState(): JsonResponse
    {
        return response()->json([
            'environment' => app()->environment(),
            'debug_mode' => config('app.debug'),
            'app_url' => config('app.url'),
            'inertia_ssr_enabled' => config('inertia.ssr.enabled', false),
            'php_version' => PHP_VERSION,
            'laravel_version' => app()->version(),
            'server_time' => now()->toISOString(),
            'memory_usage' => memory_get_usage(true),
            'memory_peak' => memory_get_peak_usage(true),
        ]);
    }

    /**
     * Check if Inertia setup is working correctly
     */
    public function checkInertiaSetup(): JsonResponse
    {
        try {
            $middlewareStack = app('router')->getMiddleware();
            $hasInertiaMiddleware = isset($middlewareStack['inertia']);

            $viewExists = view()->exists('app');

            $testContent = view('app', ['page' => [
                'component' => 'test',
                'props' => ['test' => true],
                'url' => '/test',
                'version' => '1'
            ]])->render();

            $hasDataPage = str_contains($testContent, 'data-page');
            $hasAppDiv = str_contains($testContent, 'id="app"');

            return response()->json([
                'middleware_registered' => $hasInertiaMiddleware,
                'view_exists' => $viewExists,
                'inertia_directive_works' => $hasDataPage && $hasAppDiv,
                'test_content_preview' => substr($testContent, 0, 500),
                'checks' => [
                    'has_data_page_attribute' => $hasDataPage,
                    'has_app_div' => $hasAppDiv,
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ], 500);
        }
    }
}
