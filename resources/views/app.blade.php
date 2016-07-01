<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" type="text/css" href="/css/base.css">
    <link rel="stylesheet" type="text/css" href="/css/fonts.css">
    <title>{{ $title }}</title>
    <script src="/js/jquery-2.1.1.min.js"></script>
  </head>
  <body>
    <section id="react-container"></section>
    <script src="{{ $bundle }}"></script>
  </body>
</html>