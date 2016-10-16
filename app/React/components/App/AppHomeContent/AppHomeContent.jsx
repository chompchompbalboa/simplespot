/**
* AppHomeContent.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppHomeContentImage = require('../AppHomeContentImage/AppHomeContentImage.jsx');
const AppHomeContentPricing = require('../AppHomeContentPricing/AppHomeContentPricing.jsx');
const AppHomeContentText = require('../AppHomeContentText/AppHomeContentText.jsx');
const AppHomeContentTryIt = require('../AppHomeContentTryIt/AppHomeContentTryIt.jsx');

/**
* AppHomeContent
*
* @module AppHomeContent
*/
class AppHomeContent extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props)
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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                postion: "relative",
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "300",
                color: "black",
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
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
        let {...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppHomeContentText
                    key={1}
                    order="1"
                    align="left"
                    padding={true}
                    largeText="Get your brand new website in seconds"
                    smallText="You're a busy person. We get that. That's why we built the fastest, easiest way to redesign your website. Don't let an out of date website cost you customers any more. Just type in the URL of your current website, hit go, and watch the magic happen."
                />
                <AppHomeContentImage
                    key={2}
                    order="2"
                    url="stock/examples/2.png"
                    height={{
                        "0em": "106vw",
                        "48em": "87vw",
                        "64em": "50vw"
                    }}
                    width={{
                        "0em": "85vw",
                        "48em": "70vw",
                        "64em": "40vw"
                    }}
                />
                <AppHomeContentText
                    key={3}
                    order="4"
                    align="right"
                    padding={true}
                    largeText="Custom built just for you"
                    smallText="It doesnt matter what business you're in. You want to stand out from your competition and show off what makes you unique. We've been working hard to make sure that your new website is as one of a kind as you are."
                />
                <AppHomeContentImage
                    key={4}
                    order="3"
                    url="stock/examples/1.png"
                    height={{
                        "0em": "138vw",
                        "48em": "114vw",
                        "64em": "65vw"
                    }}
                    width={{
                        "0em": "85vw",
                        "48em": "70vw",
                        "64em": "40vw"
                    }}
                />
                <AppHomeContentText
                    key={5}
                    order="5"
                    align="left"
                    padding={false}
                    largeText="Talk to a real human being"
                    smallText="We hope that you love everything about your website right away. But if you don't, you can discuss changes - and see them in real time - with a design expert who wants your site to look just the way you want it. They'll also walk you through every step until your site is up and running for the world to see."
                />
                <AppHomeContentTryIt 
                    order="6"
                />
                <AppHomeContentPricing
                    order="7"
                />
            </div>
        )
    }    
}
module.exports = Radium(AppHomeContent);