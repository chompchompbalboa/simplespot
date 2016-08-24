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
var NWAireContainerItemText = require('../NWAireContainerItemText/NWAireContainerItemText.jsx');
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
    _container: function(inView, width, marginTop) {
        return {
            style: {
                opacity: (inView ? "1" : "0"),
                marginTop: (inView ? "0" : "5vh"),
                marginBottom: "5vh",
                width: width.sm,
                transition: "opacity 1s, margin 0.5s",
                "@media (min-width: 48em) and (max-width: 64em)": {
                    width: width.md
                },
                "@media (min-width: 64em)": {
                    width: width.lg,
                    marginTop: (inView ? marginTop : "calc(" + marginTop + " + 5vh)"),
                }
            }
        }
    },

    /**
    * Settings for: _fullWidthContainer
    *
    * @function _fullWidthContainer
    * @return {object}
    */
    _fullWidthContainer: function(width) {
        let fullWidthContainer = {
            style: {
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "center",
                alignItems: "flex-start"
            }
        };
        if (width.lg === "100vw") {
            fullWidthContainer.style["@media (min-width: 64em)"] = {
                height: "40vh"
            }
        }
        return fullWidthContainer;
    },

    /**
    * Settings for: _marginContainer
    *
    * @function _marginContainer
    * @return {object}
    */
    _marginContainer: function(width) {
        let current = {
            margin: {},
            width: {}
        }
        for (let i in width) {
            current.margin[i] = ((100 - Number(width[i].replace("%", ""))) / 2) + "%";
            current.width[i] = width[i];
        }
        return {
            style: {
                marginLeft: current.margin.sm,
                width: current.width.sm,
                "@media (min-width: 48em) and (max-width: 64em)": {
                    marginLeft: current.margin.md,
                    width: current.width.md
                },
                "@media (min-width: 64em)": {
                    marginLeft: current.margin.lg,
                    width: current.width.lg
                }
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
        var {id, item, ...other} = this.props;
        let itemWidth = item.Item.width;
        let _container = this._container(this.state.inView, itemWidth, item.Item.marginTop);
        let _fullWidthContainer = this._fullWidthContainer(itemWidth);
        let _marginContainer = this._marginContainer(item.Item.marginWidth);
        return (
            <div ref={(ref) => this.container = (ref)} className="container" style={_container.style}>
                <div className="marginContainer" style={_marginContainer.style}>
                    <NWAireContainerItemCoverImage height={item.CoverImage.height} image={item.CoverImage.image} text={item.CoverImage.text} />
                    <NWAireContainerItemImageFeed id={id} images={item.ImageFeed.images} />
                    <div className="fullWidthContainer" style={_fullWidthContainer.style}>
                        <NWAireContainerItemSection dot={item.Section.dot} itemWidth={itemWidth} text={item.Section.text} />
                        <NWAireContainerItemHeader itemWidth={itemWidth} text={item.Header.text} />
                        <NWAireContainerItemText itemWidth={itemWidth} text={item.Text.text}/>
                    </div>
                </div>
            </div>
        )
    }    
});
module.exports = Radium(NWAireContainerItem);