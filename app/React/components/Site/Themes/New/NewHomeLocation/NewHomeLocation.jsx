/**
* NewHomeLocation.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* NewHomeLocation
*
* @module NewHomeLocation
*/
class NewHomeLocation extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            menuLinkArrow: "left"
        }
        this.moveMouseLinkArrow = this.moveMouseLinkArrow.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
    }

    /**
    * Move Mouse Link Arrow
    *
    * @function moveMouseLinkArrow
    * @return {object}
    */
    moveMouseLinkArrow() {
        this.setState({
            menuLinkArrow: (this.state.menuLinkArrow === "left" ? "right" : "left")
        });
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
    * @function getLocationHref
    * @return string
    */
    getLocationHref(address, city, name, state, zip) {
        // Build Google Maps link
        let query = (
            name.replace(/ /g, "+") + "," +  
            address.replace(/ /g, "+") + "," +  
            city.replace(/ /g, "+") + "," +  
            state.replace(/ /g, "+") + "," +  
            zip.replace(/ /g, "+")
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
    getMapImage(address, city, state, zip) {
        let center = this.getMapImageCenter(city, address, state, zip);
        let style = this.getMapImageStyle("ShiftWork");
        let mapImage = (
            "https://maps.googleapis.com/maps/api/staticmap?" + 
            "center=" + center + 
            "&zoom=16" +
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
    getMapImageCenter(address, city, state, zip) {
        return (address.replace(/ /g, "+") +  "," + city.replace(/ /g, "+") + "," + state.replace(/ /g, "+") + "," + zip.replace(/ /g, "+"))
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
    _a(address, city, name, state, zip) {
        let href = this.getLocationHref(address, city, name, state, zip);
        return {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
    _div(backgroundImage) {
        return {
            style: {
                margin: "5vh 0 0 0",
                width: "100vw",
                height: "30vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(" + backgroundImage + ")",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    display: "none"
                }
            }
        }
    }

    /**
    * Settings for: _menuLink
    *
    * @function _menuLink
    * @return {object}
    */
    _menuLink() {
        return {
            style: {
                margin: "5vh 0 5vh 0",
                cursor: "pointer",
                padding: "1.1vh 3.5vw",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "4vw",
                fontWeight: "400",
                letterSpacing: "0.25vw",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                border: "1px solid rgb(213,180,101)",
                color: "rgb(213,180,101)",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    fontSize: "2.125vw",
                },
                "@media (min-width: 64em)": {
                    padding: "1.25vh 2vh",
                    fontSize: "1.25vw",
                    border: "1px solid black",
                    color: "black",
                }
            }
        }
    }

    /**
    * Settings for: _menuLinkArrow
    *
    * @function _menuLinkArrow
    * @return {object}
    */
    _menuLinkArrow() {
        return {
            style: {
                margin: "0 0 0 3vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                transition: "margin 0.35s ease, width 0.35s ease",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                    margin: (this.state.menuLinkArrow === "left" ? "0 0 0 1vw" : "0 0 0 2vw")
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
        var {site, ...other} = this.props;
        let seed = site.seed;
        let backgroundImage = this.getMapImage(seed.address, seed.city, seed.state, seed.zip);
        let _a = this._a(seed.address, seed.city, seed.name, seed.state, seed.zip);
        let _div = this._div(backgroundImage); 
        let _menuLink = this._menuLink(); 
        let _menuLinkArrow = this._menuLinkArrow();
        return (
            <div className="div" style={_div.style}>
                <a target="_blank" href={_a.href} style={_a.style}>
                    <div className="menuLink" style={_menuLink.style} onMouseEnter={this.moveMouseLinkArrow} onMouseLeave={this.moveMouseLinkArrow}>
                        Find Us <div className="menuLinkArrow" style={_menuLinkArrow.style}>&rarr;</div>
                    </div>
                </a>
            </div>
        )
    }    
}
// Export
module.exports = Radium(NewHomeLocation);