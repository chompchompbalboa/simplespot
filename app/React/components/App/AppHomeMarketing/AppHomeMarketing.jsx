/**
* AppHomeMarketing.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const AppHomeMarketingItem = require('../AppHomeMarketingItem/AppHomeMarketingItem.jsx');

/**
* AppHomeMarketing
*
* @module AppHomeMarketing
*/
class AppHomeMarketing extends React.Component {

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
                backgroundColor: "rgba(250,250,250,1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
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
                <AppHomeMarketingItem 
                    key={1}
                    align="left"
                    largeText="Get your brand new website in seconds"
                    smallText="You're a busy person. We get that. That's why we built the fastest, easiest way to redesign your website. Don't let an out of date website cost you customers any more. Just type in the URL of your current website, hit go, and watch the magic happen."
                    image={{
                        url: "stock/examples/1.png",
                        height: {
                            "0em": "33vw"
                        },
                        width: {
                            "0em": "85vw"
                        }
                    }}
                />
                <AppHomeMarketingItem 
                    key={2}
                    align="right"
                    largeText="Custom built just for you"
                    smallText="It doesnt matter what business you're in. You always want to stand out from your competition and show off what makes you unique. We've been working hard to make sure that your new website is as one of a kind as you are."
                    image={{
                        url: "stock/examples/2.png",
                        height: {
                            "0em": "106vw"
                        },
                        width: {
                            "0em": "85vw"
                        }
                    }}
                />
            </div>
        )
    }    
}
module.exports = Radium(AppHomeMarketing);