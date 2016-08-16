/**
* SplashOne.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var contentActions = require('../../../actions/contentActions');

/**
* Let's throw a party
*
* @module SplashOne
*/
var SplashOne = React.createClass({

    /**
    * Validate props types
    *
    * @prop propTypes
    * @return {object}
    */
    propTypes: {
    },

    /**
    * Get the default props
    *
    * @function getDefaultProps
    * @return {object}
    */
    getDefaultProps: function() {
        return {
        }
    },

    /**
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick: function(e, response) {
        e.preventDefault();
        contentActions.changeContent([]);
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
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    },

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text: function() {
        return {
            style: {
                margin: "0 1vw 0 1vw",
                color: "white",
                fontFamily: "titilliumlight",
                fontSize: "24px",
                textTransform: "uppercase"
            }
        }
    },

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render: function() {
        var {...other} = this.props;
        let _section = this._section();
        let _text = this._text();
        return (
            <section className="section" style={_section.style}>
                <a href="" onClick={(e) => this.handleClick(e, "1")}>
                    <div className="yes" style={[_text.style]}>
                        1
                    </div>
                </a>
                <a href="" onClick={(e) => this.handleClick(e, "2")}>
                    <div className="no" style={[_text.style]}>
                        2
                    </div>
                </a>
                <a href="" onClick={(e) => this.handleClick(e, "2")}>
                    <div className="no" style={[_text.style]}>
                        3
                    </div>
                </a>
            </section>
        )
    }    
});
module.exports = Radium(SplashOne);