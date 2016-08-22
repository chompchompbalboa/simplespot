/**
* randomGenerator.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

import randomImport from '../utils/random';
const random = new randomImport();

/**
* Generate a new set of inputs for a given site type and theme
*
* @module randomGenerator
*/
export default class {

    /**
    * Generate
    * 
    * @function generate
    */
    generate(type) {
        let colors = this._colors();
        let fonts = this._fonts();
        switch(type) {
            case "restaurant":
                let pages = this._pages({
                    "/": {
                        0: [
                            "SplashOne"
                        ],
                        1: [
                            "NavigationOne",
                            "NavigationTwo"
                        ],
                        2: [
                            "HoursOne"
                        ],
                        3: [
                            "ImageOne"
                        ],
                        4: [
                            "ImageOne"
                        ],
                        5: [
                            "LinkOne"
                        ],
                        6: [
                            "LocationOne"
                        ]
                    }
                });
                return this._modules(colors, fonts, pages);
            break;
        }
    }

    /**
    * Generate the color scheme
    * 
    * @function _colors
    */
    _colors() {
        return {
            primary: random.color(),
            secondary: random.color(),
            tertiary: random.color()
        }
    }

    /**
    * Generate the font scheme
    * 
    * @function _fonts
    */
    _fonts() {
        return {
            primary: {
                fontFamily: random.fontFamily(),
                fontWeight: random.fontWeight(),
                letterSpacing: random.letterSpacing(),
                textTransform: random.textTransform()
            },
            secondary: {
                fontFamily: random.fontFamily(),
                fontWeight: random.fontWeight(),
                letterSpacing: random.letterSpacing(),
                textTransform: random.textTransform()
            },
            tertiary: {
                fontFamily: random.fontFamily(),
                fontWeight: random.fontWeight(),
                letterSpacing: random.letterSpacing(),
                textTransform: random.textTransform()
            }
        }
    }

    /**
    * Attach the randomized props to each of the modules
    * 
    * @function _modules
    */
    _modules(colors, fonts, pages) {
        let payload = {};
        for (let i in pages) {
            payload[i] = {};
            let page = pages[i];
            for (let j in page) {
                let module = page[j];
                payload[i][j] = {};
                payload[i][j]['module'] = module;
                payload[i][j]['props'] = this._randomize(colors, fonts, module);
            }
        }
        return payload;
    }

    /**
    * Choose the modules from the bins within each page
    * 
    * @function _pages
    */
    _pages(pages) {
        let payload = {};
        for (let i in pages) {
            payload[i] = {};
            let page = pages[i];
            for (let j in page) {
                let bin = page[j];
                let module = random.fromArray(bin);
                payload[i][j] = module;
            }
        }
        return payload;
    }

    /**
    * Choose the modules from the bins within each page
    * 
    * @function _randomize
    */
    _randomize(colors, fonts, module) {
        let font;
        switch(module) {


            case "NavigationOne":
                font = random.fromArray([fonts.primary, fonts.secondary]);
                return {
                    items: {
                        items: {
                            0: {text: "Hours", path: "/hours"},
                            1: {text: "Menu", path: "/menu"},
                            2: {text: "Location", path: "/location"}    
                        },
                        font: {
                            color: "white",
                            fontFamily: font.fontFamily,
                            fontSize: random.fontSize(12,18),
                            fontWeight: font.fontWeight,
                            letterSpacing: font.letterSpacing,
                            textTransform: font.textTransform
                        }
                    },
                    nav: {
                        justifyContent: random.justifyContent()
                    }
                }
            break;

            case "NavigationTwo":
                font = random.fromArray([fonts.primary, fonts.secondary]);
                return {
                    items: {
                        items: {
                            0: {text: "Hours", path: "/hours"},
                            1: {text: "Menu", path: "/menu"},
                            2: {text: "Location", path: "/location"}    
                        },
                        font: {
                            color: "black",
                            fontFamily: font.fontFamily,
                            fontSize: random.fontSize(15,18),
                            fontWeight: font.fontWeight,
                            letterSpacing: font.letterSpacing,
                            textTransform: font.textTransform
                        }
                    },
                    logo: {
                        left: random.fromArray(["calc(100vw - 7vh)", "3vh"])
                    },
                    nav: {
                        justifyContent: random.justifyContent()
                    }
                }
            break;


            case "SplashOne":
                let largeText = fonts.primary;
                let smallText = random.fromArray([fonts.primary, fonts.secondary]);
                return {
                    backgroundImage: random.backgroundImageWithOverlay(colors.primary),
                    largeText: {
                        font: {
                            color: "white",
                            fontFamily: largeText.fontFamily,
                            fontSize: random.fontSize(34,60),
                            fontWeight: largeText.fontWeight,
                            letterSpacing: largeText.letterSpacing,
                            textTransform: largeText.textTransform
                        },
                        text: "Your Name Here"
                    },
                    smallText: {
                        font: {
                            color: "white",
                            fontFamily: smallText.fontFamily,
                            fontSize: random.fontSize(18,34),
                            fontWeight: smallText.fontWeight,
                            letterSpacing: smallText.letterSpacing,
                            textTransform: smallText.textTransform
                        },
                        text: "Here is where a brief description would go"
                    }
                }
            break;
        }
    }
}