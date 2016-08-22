/**
* random.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

export default class {

    /**
    * Get a random number between a max and min
    * 
    * @function number
    * @requires min
    * @requires max
    */
    number(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
    * Get a random value from an array
    * 
    * @function fromArray
    * @requires array
    */
    fromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
    * Get a random integer between a max and a min
    * 
    * @function generate
    * @requires min
    * @requires max
    */
    integer(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
    * Get a random rgba color value
    * 
    * @function color
    */
    color() {
        return "rgba(" + this.integer(1, 255) + "," + this.integer(1, 255) + "," + this.integer(1, 255) + ",1)";
    }

    /**
    * Get a random opaque rgba color value - generally used as an overlay on images
    * 
    * @function overlay
    */
    overlay() {
        return "rgba(" + this.integer(1, 255) + "," + this.integer(1, 255) + "," + this.integer(1, 255) + "," + this.number(0,0.5) + ")";
    }

    /**
    * Get a random stock image from the stock images folder
    * 
    * @function stockImage
    */
    stockImage() {
        return "url(stock/" + this.integer(1,15) + ".jpg)";
    }

    /**
    * From an input color, get a gradient with a random opacity
    * 
    * @function gradient
    * @requires color
    */
    gradient(color) {
        let rgb = ((color.replace("rgba(", "")).replace(")", "")).replace(",1", "");
        let rgba = "rgba(" + rgb + "," + this.number(0,0.3) + ")";
        return "linear-gradient(to top, " + rgba + "," + rgba + ")";
    }

    /**
    * Get a random stock background image with an overlaid color
    * 
    * @function backgroundImageWithOverlay
    */
    backgroundImageWithOverlay(color) {
        return this.gradient(color) + ", " + this.stockImage();
    }

    /**
    * Get a random font weight
    * 
    * @function fontWeight
    */
    fontWeight() {
        return this.fromArray([100,200,300,400,500,600,700]);
    }

    /**
    * Get a random font size between a min and max value - in px
    * 
    * @function fontSize
    * @requires min
    * @requires max
    */
    fontSize(min, max) {
        return this.integer(min, max) + "px";
    }

    /**
    * Get a random letter spacing value between 1px and a max value
    * 
    * @function letterSpacing
    */
    letterSpacing(max) {
        return this.integer(1,max) + "px";
    }

    /**
    * Get a random value for a textTransform
    * 
    * @function textTransform
    */
    textTransform() {
        return this.fromArray(["", "uppercase"]);
    }

    /**
    * Get a random value for justifyContent
    * 
    * @function justifyContent
    */
    justifyContent() {
        return this.fromArray(["center", "flex-start", "flex-end", "space-between", "space-around"]);
    }

    /**
    * Get a random value for alignItems
    * 
    * @function alignItems
    */
    alignItems() {
        return this.fromArray(["center", "flex-start", "flex-end", "baseline", "stretch"]);
    }

    /**
    * Get a random font from our list of google fonts
    * 
    * @function fontFamily
    */
    fontFamily() {
        return this.fromArray([
            'Arimo, sans-serif',
            'Denk One, sans-serif',
            'Droid Sans, sans-serif',
            'Droid Serif, serif',
            'Fjalla One, sans-serif',
            'Hind Guntur, sans-serif',
            'Lakki Reddy, cursive',
            'Lato, sans-serif',
            'Lora, serif',
            'Merriweather, serif',
            'Montserrat, sans-serif',
            'Noto Sans, sans-serif',
            'Open Sans, sans-serif',
            'Open Sans Condensed, sans-serif',
            'Oswald, sans-serif',
            'PT Sans, sans-serif',
            'PT Sans Narrow, sans-serif',
            'PT Serif, serif',
            'Playfair Display, serif',
            'Raleway, sans-serif',
            'Risque, cursive',
            'Roboto, sans-serif',
            'Roboto Condensed, sans-serif',
            'Roboto Slab, serif',
            'Slabo 27px, serif',
            'Source Sans Pro, sans-serif',
            'Taviraj, serif',
            'Titillium Web, sans-serif',
            'Ubuntu, sans-serif',
            'Yrsa, serif',
            'Indie Flower, cursive',
            'Dosis, sans-serif',
            'Muli, sans-serif',
            'Inconsolata, monospace',
            'Bitter, serif',
            'Oxygen, sans-serif',
            'Hind, sans-serif',
            'Uncial Antiqua, cursive',
            'Cabin, sans-serif',
            'Passion One, cursive',
            'Lobster, cursive',
            'Yanone Kaffeesatz, sans-serif',
            'Arvo, serif',
            'Noto Serif, serif',
            'Alegreya Sans, sans-serif',
            'Abel, sans-serif',
            'Poppins, sans-serif',
            'Exo 2, sans-serif',
            'Reem Kufi, sans-serif',
            'Anton, sans-serif',
            'Merriweather Sans, sans-serif',
            'Bree Serif, serif',
            'Josefin Sans, sans-serif',
            'Ubuntu Condensed, sans-serif',
            'Libre Baskerville, serif',
            'Catamaran, sans-serif',
            'Asap, sans-serif',
            'Pacifico, cursive',
            'Fira Sans, sans-serif',
            'Poiret One, cursive',
            'Dekko, cursive',
            'Crimson Text, serif',
            'Exo, sans-serif',
            'Archivo Narrow, sans-serif',
            'Quicksand, sans-serif',
            'Cuprum, sans-serif',
            'Varela Round, sans-serif',
            'Francois One, sans-serif',
            'Signika, sans-serif',
            'Maven Pro, sans-serif',
            'Karla, sans-serif',
            'Shadows Into Light, cursive',
            'Vollkorn, serif',
            'Questrial, sans-serif',
            'Play, sans-serif',
            'Bungee Inline, cursive',
            'PT Sans Caption, sans-serif',
            'Dancing Script, cursive',
            'Abril Fatface, cursive',
            'Arima Madurai, cursive',
            'Orbitron, sans-serif',
            'Rokkitt, serif',
            'Candal, sans-serif',
            'Alegreya, serif',
            'Roboto Mono, monospace',
            'Crete Round, serif',
            'Yellowtail, cursive',
            'Work Sans, sans-serif',
            'EB Garamond, serif',
            'Righteous, cursive',
            'Patua One, cursive',
            'Pathway Gothic One, sans-serif',
            'Montez, cursive',
            'Amatic SC, cursive',
            'Eczar, serif',
            'Tillana, cursive',
            'Rasa, serif',
            'Hammersmith One, sans-serif',
            'News Cycle, sans-serif',
            'Monda, sans-serif',
        ]);
    }
}
