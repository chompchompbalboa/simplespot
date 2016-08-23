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
var NWAireContainerItemFullTextLink = require('../NWAireContainerItemFullTextLink/NWAireContainerItemFullTextLink.jsx');
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
            fullTextVisible: false,
            inView: false
        }
    },

    /**
    * Component did mount
    *
    * @function componentDidMount
    * @return {object}
    */
    componentDidMount: function() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementBox = this.container.getBoundingClientRect();
        if ((elementBox.top - (height * 0.05)) < height) {
            this.setState({
                inView: true
            })
        }
        else {
            window.addEventListener('scroll', this.handleScroll)
        }
    },

    /**
    * Settings for: handleFullTextLinkClick
    *
    * @function handleFullTextLinkClick
    * @return {object}
    */
    handleFullTextLinkClick: function(e, visible) {
        e.preventDefault();
        this.setState({
            fullTextVisible: (visible ? false : true)
        });
    },

    /**
    * Settings for: handleScroll
    *
    * @function handleScroll
    * @return {object}
    */
    handleScroll: function() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementBox = this.container.getBoundingClientRect();
        if (elementBox.top < (height - (height * 0.05))) {
            window.removeEventListener('scroll', this.handleScroll);
            this.setState({
                inView: true
            });
        }
    },

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container: function(inView) {
        return {
            style: {
                opacity: (inView ? "1" : "0"),
                margin: (inView ? "0 0 3vh 5%" : "5vh 0 3vh 5%"),
                width: "90%",
                transition: "opacity 1s, margin 0.5s"
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
        let _container = this._container(this.state.inView);
        return (
            <div ref={(ref) => this.container = (ref)} className="container" style={_container.style}>
                <NWAireContainerItemCoverImage height={item.CoverImage.height} image={item.CoverImage.image} text={item.CoverImage.text} />
                <NWAireContainerItemImageFeed images={item.ImageFeed.images} />
                <NWAireContainerItemSection dot={item.Section.dot} text={item.Section.text} />
                <NWAireContainerItemHeader text={item.Header.text} />
                <NWAireContainerItemShortText fullTextVisible={this.state.fullTextVisible} handleFullTextLinkClick={this.handleFullTextLinkClick} text={item.ShortText.text}/>
                <NWAireContainerItemFullText fullTextVisible={this.state.fullTextVisible} text={item.FullText.text}/>
                <NWAireContainerItemFullTextLink fullTextVisible={this.state.fullTextVisible} handleFullTextLinkClick={this.handleFullTextLinkClick} text={item.FullText.text}/>
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItem);