<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" type="text/css" href="/css/base.css">
    <link rel="stylesheet" type="text/css" href="/css/fonts.css">
    <link href="https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Alegreya+Sans|Amatic+SC|Anton|Archivo+Narrow|Arima+Madurai|Arimo|Arvo|Asap|Bitter|Bree+Serif|Bungee+Inline|Cabin|Candal|Catamaran|Crete+Round|Crimson+Text|Cuprum|Dancing+Script|Dekko|Denk+One|Dosis|Droid+Sans|Droid+Serif|EB+Garamond|Eczar|Exo|Exo+2|Fira+Sans|Fjalla+One|Francois+One|Hammersmith+One|Hind|Hind+Guntur|Inconsolata|Indie+Flower|Josefin+Sans|Karla|Lakki+Reddy|Lato|Libre+Baskerville|Lobster|Lora|Maven+Pro|Merriweather|Merriweather+Sans|Monda|Montez|Montserrat|Muli|News+Cycle|Noto+Sans|Noto+Serif|Open+Sans|Open+Sans+Condensed:300|Orbitron|Oswald|Oxygen|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|Pacifico|Passion+One|Pathway+Gothic+One|Patua+One|Play|Playfair+Display|Poiret+One|Poppins|Questrial|Quicksand|Raleway|Rasa|Reem+Kufi|Righteous|Risque|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Rokkitt|Shadows+Into+Light|Signika|Slabo+27px|Source+Sans+Pro|Taviraj|Tillana|Titillium+Web|Ubuntu|Ubuntu+Condensed|Uncial+Antiqua|Varela+Round|Vollkorn|Work+Sans|Yanone+Kaffeesatz|Yellowtail|Yrsa" rel="stylesheet">
    <title>{{ $title }}</title>
    <script src="/js/jquery-2.1.1.min.js"></script>
  </head>
  <body>
    <section id="react-container"></section>
    <script src="{{ $bundle }}"></script>
  </body>
</html>