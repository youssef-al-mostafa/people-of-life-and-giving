<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

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
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

    {{-- Manual route registration --}}
    <script>
        window.route = function(name, params, absolute) {
            // Simple route helper - you can expand this
            const routes = {
                'home': '/',
                'admin.dashboard': '/admin/dashboard',
                // Add other routes as needed
            };
            return routes[name] || '/';
        };
    </script>

    {{-- Manual Vite assets --}}
    <link rel="stylesheet" href="{{ asset('build/assets/app-' . substr(md5('app.css'), 0, 8) . '.css') }}" />
    <script type="module" src="{{ asset('build/assets/app-' . substr(md5('app.tsx'), 0, 8) . '.js') }}"></script>

    {{-- Inertia head will be populated by React --}}
</head>

<body class="font-sans antialiased">
    {{-- Manual @inertia replacement --}}
    <div id="app" data-page="{{ json_encode($page) }}"></div>
</body>

</html>
