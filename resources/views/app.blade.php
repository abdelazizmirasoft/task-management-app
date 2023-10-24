<!DOCTYPE html>
@viteReactRefresh
@vite('resources/js/app.js')

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <title>Task Management App</title>
    
    </head>
    
    <body>
        <div id="app"></div>       
        <script src="{{asset('js/app.js')}}"></script>
    </body>

</html>