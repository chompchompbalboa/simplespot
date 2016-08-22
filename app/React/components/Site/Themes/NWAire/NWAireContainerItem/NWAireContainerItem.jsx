/**
* NWAireContainerItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

var NWAireContainerItemCoverImage = require('../NWAireContainerItemCoverImage/NWAireContainerItemCoverImage.jsx');
var NWAireContainerItemImageFeed = require('../NWAireContainerItemImageFeed/NWAireContainerItemImageFeed.jsx');
var NWAireContainerItemSection = require('../NWAireContainerItemSection/NWAireContainerItemSection.jsx');
var NWAireContainerItemHeader = require('../NWAireContainerItemHeader/NWAireContainerItemHeader.jsx');
var NWAireContainerItemShortText = require('../NWAireContainerItemShortText/NWAireContainerItemShortText.jsx');
var NWAireContainerItemFullText = require('../NWAireContainerItemFullText/NWAireContainerItemFullText.jsx');
/**
* The theme for Northwest Aire Services
*
* @module NWAireContainerItem
*/
var NWAireContainerItem = React.createClass({

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
    * Get the default props
    *
    * @function getInitialState
    * @return {object}
    */
    getInitialState: function() {
        return {
            fullTextVisible: false
        }
    },

    /**
    * Settings for: handleShortTextClick
    *
    * @function handleShortTextClick
    * @return {object}
    */
    handleShortTextClick: function(e, visible) {
        e.preventDefault();
        this.setState({
            fullTextVisible: (visible ? false : true)
        });
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function() {
        return {
            style: {
                margin: "0 0 0 5%",
                width: "90%"
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
        var {item, ...other} = this.props;
        let _container = this._container();
        return (
            <div className="container" style={_container.style}>
                <NWAireContainerItemCoverImage height={item.CoverImage.height} image={item.CoverImage.image} text={item.CoverImage.text} />
                <NWAireContainerItemImageFeed images={item.ImageFeed.images} />
                <NWAireContainerItemSection dot={item.Section.dot} text={item.Section.text} />
                <NWAireContainerItemHeader text={item.Header.text} />
                <NWAireContainerItemShortText handleShortTextClick={this.handleShortTextClick} fullTextVisible={this.state.fullTextVisible} text={item.ShortText.text}/>
                <NWAireContainerItemFullText fullTextVisible={this.state.fullTextVisible} text={item.FullText.text}/>
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItem);