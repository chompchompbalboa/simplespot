/**
* OneContainerMap.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* OneContainerMap
*
* @module OneContainerMap
*/
class OneContainerMap extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.mapStyles = this.mapStyles.bind(this);
        this.getLocationHref = this.getLocationHref.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        address: React.PropTypes.string.isRequired,
        height: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired,
        locality: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        postalCode: React.PropTypes.string.isRequired,
        region: React.PropTypes.string.isRequired,
        width: React.PropTypes.shape({
            "0em": React.PropTypes.number.isRequired,
            "48em": React.PropTypes.number.isRequired,
            "64em": React.PropTypes.number.isRequired
        }).isRequired,
        zoom: React.PropTypes.string.isRequired,
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        address: "400 Broad St",
        color: "0,0,0",
        fontFamily: "Open Sans, sans-serif",
        fontSize: {
            "0em": "3.5vw",
            "48em": "1.75vw",
            "64em": "2vw"
        },
        fontWeight: {
            "0em": "400",
            "48em": "400",
            "64em": "400"
        },
        height: {
            "0em": 50,
            "48em": 50,
            "64em": 50
        },
        letterSpacing: {
            "0em": "0.5vw",
            "48em": "0.35vw",
            "64em": "0.25vw"
        },
        lineHeight: {
            "0em": "1.5",
            "48em": "1.4",
            "64em": "1.4"
        },
        locality: "Seattle",
        mapStyle: "ShiftWork",
        name: "Space Needle",
        postalCode: "98109",
        region: "WA",
        textContainerHeight: {
            "0em": "auto",
            "48em": "auto",
            "64em": "auto"
        },
        textContainerWidth: {
            "0em": "auto",
            "48em": "auto",
            "64em": "auto"
        },
        width: {
            "0em": 100,
            "48em": 50,
            "64em": 50
        },
        zoom: "16"
    }

    /**
    * Map Styles
    *
    * Snazzy Maps has a great list of freely available styles - I'm going to
    * use those rather than generate my own. Here's where I store the 
    * available styles.
    *
    * @prop defautProps
    */
    mapStyles() {
        return {
            ShiftWork: [
                {"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":1}]},
                {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},
                {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
                {"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},
                {"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},
                {"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
                {"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},
                {"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}
            ]
        }
    }

    /**
    * Get Location Href
    *
    * When the user clicks on the "Find Us" link, they should be sent to their
    * native maps app if they're on a phone or tablet and to google maps if
    * they're in a web browser. This function generates the appropriate link
    *
    * @function getMapImage
    * @return string
    */
    getLocationHref(address, locality, name, postalCode, region) {
        // Build Google Maps link
        let query = (
            name.replace(/ /g, "+") + "," +  
            address.replace(/ /g, "+") + "," +  
            locality.replace(/ /g, "+") + "," +  
            region.replace(/ /g, "+") + "," +  
            postalCode.replace(/ /g, "+")
        );
        if (/Mobi/.test(navigator.userAgent)) { 
            return "http://maps.apple.com/?address=" + query;
        }
        else {
            return "https://www.google.com/maps/place/" + query;
        }
    }

    /**
    * Get Map Image
    *
    * Fetch a static image of a location from the google maps api
    *
    * @function getMapImage
    * @return string
    */
    getMapImage(address, height, locality, mapStyle, markerColor, postalCode, region, width, zoom) {
        let center = this.getMapImageCenter(address, locality, postalCode, region);
        let marker = this.getMapImageMarker(center, markerColor);
        let style = this.getMapImageStyle(mapStyle);
        let mapImage = (
            "https://maps.googleapis.com/maps/api/staticmap?" + 
            "center=" + center + 
            "&zoom=" + zoom + 
            "&size=640x640" +
            "&scale=2" +
            //"&markers=" + marker + 
            style + 
            "&key=AIzaSyCy0TJ-oTgR8qIe5SxF4UIwB1m2KHvpViU"
        );
        return mapImage;
    }

    /**
    * Get Map Image Center
    *
    * Center the map on the current business
    *
    * @function getMapImageCenter
    * @return string
    */
    getMapImageCenter(address, locality, postalCode, region) {
        return (address.replace(/ /g, "+") +  "," + locality.replace(/ /g, "+") + "," + region.replace(/ /g, "+") + "," + postalCode.replace(/ /g, "+"))
    }

    /**
    * Get Map Image Marker
    *
    * Tell the google maps API where the marker for business goes and what it should look like
    *
    * @function getMapImageMarker
    * @return string
    */
    getMapImageMarker(center, markerColor) {
        return ("color:" + markerColor + "|" + center)
    }

    /**
    * Get Map Image Style
    *
    * @function getMapImageStyle
    * @return string
    */
    getMapImageStyle(mapStyle) {
        let mapImageStyle = "";
        let style = this.mapStyles()[mapStyle];
        for (let i in style) {
            let current = style[i];
            let featureString = "&style=feature:" + current.featureType + "|";
            let elementString = "element:" + current.elementType + "|";
            let styleString = ""
            for (let j in current.stylers) {
                for (let k in current.stylers[j]) {
                    styleString = styleString + k + ":" + current.stylers[j][k] + "|";
                }
            }
            mapImageStyle = mapImageStyle + featureString + elementString + styleString;
        }
        mapImageStyle = mapImageStyle.replace(/#/g, "0x");
        return mapImageStyle;  
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a(address, locality, name, postalCode, region) {
        let href = this.getLocationHref(address, locality, name, postalCode, region);
        return {
            style: {
            },
            href: href
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(backgroundImage, height, item, marginTops, width) {
        return {
            style: {
                marginTop: marginTops['0em'][item],
                width: width['0em'] + "vw",
                height: height['0em'] + "vh",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no repeat",
                backgroundImage: "url(" + backgroundImage+ ")",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    marginTop: marginTops['48em'][item],
                    width: width['48em'] + "vw",
                    height: height['48em'] + "vh"
                },
                "@media (min-width: 64em)": {
                    marginTop: marginTops['64em'][item],
                    width: width['64em'] + "vw",
                    height: height['64em'] + "vh"
                }
            }
        }
    }

    /**
    * Settings for: _textContainer
    *
    * @function _textContainer
    * @return {object}
    */
    _textContainer(color, fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, textContainerHeight, textContainerWidth) {
        return {
            style: {
                padding: "1.5vw",
                width: textContainerWidth['0em'],
                height: textContainerHeight['0em'],
                color: "rgb(" + color + ")",
                fontFamily: fontFamily,
                fontSize: fontSize['0em'],
                fontWeight: fontSize['0em'],
                letterSpacing: letterSpacing['0em'],
                lineHeight: lineHeight['0em'],
                border: "2px solid rgb(" + color + ")",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: textContainerWidth['48em'],
                    height: textContainerHeight['48em'],
                    fontSize: fontSize['48em'],
                    fontWeight: fontSize['48em'],
                    letterSpacing: letterSpacing['48em'],
                    lineHeight: lineHeight['48em']
                },
                "@media (min-width: 64em)": {
                    width: textContainerWidth['64em'],
                    height: textContainerHeight['64em'],
                    fontSize: fontSize['64em'],
                    fontWeight: fontSize['64em'],
                    letterSpacing: letterSpacing['64em'],
                    lineHeight: lineHeight['64em']
                }
            }
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {address, color, fontFamily, fontSize, fontWeight, height, item, letterSpacing, lineHeight, locality, mapStyle, marginTops, markerColor, name, postalCode, region, textContainerHeight, textContainerWidth, width, zoom, ...other} = this.props;
        let backgroundImage = this.getMapImage(address, height, locality, mapStyle, markerColor, postalCode, region, width, zoom);
        let _a = this._a(address, locality, name, postalCode, region);
        let _div = this._div(backgroundImage, height, item, marginTops, width);
        let _textContainer = this._textContainer(color, fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, textContainerHeight, textContainerWidth)
        return (
            <div className="div" style={_div.style}>
                <a target="_blank" href={_a.href} style={_a.style}>
                    <div className="textContainer" style={_textContainer.style}>
                        FIND US
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(OneContainerMap);