<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Debug information in head --}}
    @if(config('app.debug'))
    <script>
        console.log('[DEBUG] Blade template loaded', {
            environment: '{{ app()->environment() }}',
            debug: {{ config('app.debug') ? 'true' : 'false' }},
            url: '{{ config('app.url') }}',
            timestamp: '{{ now()->toISOString() }}'
        });
    </script>
    @endif

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

    @routes
    @viteReactRefresh
    {{-- FIXED: Only load the main app.tsx, let dynamic imports handle the components --}}
    @vite(['resources/js/app.tsx'])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    {{-- Debug information before @inertia --}}
    @if(config('app.debug'))
    <script>
        console.log('[DEBUG] Body loaded, about to render @inertia directive', {
            pageComponent: '{{ $page['component'] ?? 'unknown' }}',
            hasPageData: {{ isset($page) ? 'true' : 'false' }},
            bodyReadyState: document.readyState,
            timestamp: new Date().toISOString()
        });
    </script>
    @endif

    @inertia

    {{-- Debug information after @inertia --}}
    @if(config('app.debug'))
    <script>
        console.log('[DEBUG] @inertia directive rendered', {
            hasAppElement: !!document.getElementById('app'),
            appElementData: document.getElementById('app')?.dataset || {},
            timestamp: new Date().toISOString()
        });

        // Log the actual content of the app element
        const appEl = document.getElementById('app');
        if (appEl) {
            console.log('[DEBUG] App element details:', {
                id: appEl.id,
                tagName: appEl.tagName,
                attributes: Array.from(appEl.attributes).map(attr => ({
                    name: attr.name,
                    value: attr.value.substring(0, 100) + (attr.value.length > 100 ? '...' : '')
                })),
                innerHTML: appEl.innerHTML.substring(0, 200) + (appEl.innerHTML.length > 200 ? '...' : ''),
                dataset: Object.keys(appEl.dataset || {}),
                hasDataPage: !!appEl.dataset.page
            });

            // Try to parse the data-page if it exists
            if (appEl.dataset.page) {
                try {
                    const pageData = JSON.parse(appEl.dataset.page);
                    console.log('[DEBUG] Successfully parsed page data:', {
                        component: pageData.component,
                        hasProps: !!pageData.props,
                        propsKeys: Object.keys(pageData.props || {}),
                        url: pageData.url,
                        version: pageData.version
                    });
                } catch (e) {
                    console.error('[DEBUG] Failed to parse page data:', e);
                    console.log('[DEBUG] Raw page data:', appEl.dataset.page.substring(0, 500));
                }
            } else {
                console.error('[DEBUG] No data-page attribute found on app element');
            }
        } else {
            console.error('[DEBUG] No app element found after @inertia directive');
        }
    </script>
    @endif
</body>

</html>
