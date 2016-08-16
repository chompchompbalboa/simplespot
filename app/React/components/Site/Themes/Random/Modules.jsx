/**
* Modules.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var SplashOne = require('./bins/Splash/SplashOne.jsx');

/**
* Load the modules
*
* @module Modules
*/
var Modules = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
        specs: React.PropTypes.object.isRequired
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
            specs: {}
        }
    },

    /**
    * All the randomizers
    *
    * @function random
    * @return {object}
    */
    random: function() {
        let number = function(min, max) {
            return Math.random() * (max - min) + min;
        };
        let integer = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        let fromArray = function(options) {
            return options[Math.floor(Math.random() * options.length)];
        };
        let color = function() {
            return "rgba(" + integer(1, 255) + "," + integer(1, 255) + "," + integer(1, 255) + ", 1)";
        };
        let overlay = function() {
            return "rgba(" + integer(1, 255) + "," + integer(1, 255) + "," + integer(1, 255) + ", " + number(0,0.5) + ")";
        };
        let stockImage = function() {
            return "url(stock/" + integer(1,15) + ".jpg)";
        };
        let backgroundImageWithOverlay = function() {
            let gradient = overlay();
            return "linear-gradient(to top, " + gradient + "," + gradient + "), " + stockImage();
        };
        let fontWeight = function() {
            return fromArray([100,200,300,400,500,600,700]);
        };
        let font = function() {
            return fromArray([
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
        return {
            backgroundImageWithOverlay: backgroundImageWithOverlay,
            color: color,
            font: font,
            fontWeight: fontWeight,
            fromArray: fromArray,
            integer: integer,
            overlay: overlay,
            stockImage: stockImage
        }
    }, 

    /**
    * Settings for: _bins
    *
    * @function _bins
    * @return {object}
    */
    _bins: function() {
        return {
            "Splash": [
                "SplashOne"
            ]
        }
    },

    /**
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section: function() {
        return {
            style: {
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "center"
            }
        }
    },  

    /**
    * Settings for: __modules
    *
    * @function __modules
    * @return {object}
    */
    __modules: function(random, specs) {
        let payload = [];
        let bins = this._bins();
        for (let i in specs) {
            let module = random.fromArray(bins[specs[i].bin]);
             payload.push(
                React.createElement(
                    eval(module),
                    {
                        key: i,
                        random: random
                    },
                )
            )   
        }
        return payload;
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {specs, ...other} = this.props;
        let _section = this._section();
        let __modules = this.__modules(this.random(), specs.modules);
        return (
            <section className="section" style={_section.style}>
                {__modules}
            </section>
        )
    }    
});
module.exports = Radium(Modules);