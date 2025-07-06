<!DOCTYPE html>
<html>
<head>
    <title>Blade Test</title>
</head>
<body>
    <h1>Testing Blade Directives</h1>

    <p>If you see "ROUTES_WORK" below, @routes is working:</p>
    @routes
    <script>console.log('ROUTES_WORK');</script>

    <p>If you see "VITE_WORK" below, @vite is working:</p>
    @vite(['resources/js/app.tsx'])
    <script>console.log('VITE_WORK');</script>

    <p>Testing basic Blade:</p>
    {{ config('app.name') }}
</body>
</html>
