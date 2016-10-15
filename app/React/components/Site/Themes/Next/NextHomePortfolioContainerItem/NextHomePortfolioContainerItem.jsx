/**
* NextPortfolioContainerItem.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const contentActions = require('../../../../../actions/contentActions');

/**
* NextPortfolioContainerItem
*
* @module NextPortfolioContainerItem
*/
class NextPortfolioContainerItem extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            inView: false,
            mouseIn: false 
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        item: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        item: {
            backgroundImage: "/uploads/5776dd982cb85ae0b1b350e7/projects/one/placeholder.jpg",
            href: "/one",
            largeText: "Project One",
            smallText: "A brief description of Project One"
        }
    }

    /**
    * Component did mount
    *
    * @function componentDidMount
    */
    componentDidMount() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementBox = this.item.getBoundingClientRect();
        if ((elementBox.top - (height * 0.1)) < height) {
            this.setState({
                inView: true
            })
        }
        else {
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    /**
    * Component will unmount
    *
    * @function componentWillUnmount
    */
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    /**
    * Settings for: handleScroll
    *
    * @function handleScroll
    */
    handleScroll() {
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let elementBox = this.item.getBoundingClientRect();
        if (elementBox.top < (height + (height * 0.03))) {
            window.removeEventListener('scroll', this.handleScroll);
            this.setState({
                inView: true
            });
        }
    }

    /**
    * Handle Mouse Enter
    *
    * @function handleMouseEnter
    */
    handleMouseEnter(e) {
        this.setState({
            mouseIn: true
        });
    }

    /**
    * Handle Mouse Leave
    *
    * @function handleMouseLeave
    */
    handleMouseLeave(e) {
        this.setState({
            mouseIn: false
        })
    }

    /**
    * Handle Click
    *
    * When the container item is clicked, navigate to the corresponding
    * project page
    *
    * @function handleClick
    */
    handleClick(e, href) {
        e.preventDefault();
        let changes = [
            {key: "site.display.path", value: href}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a(item) {
        return {
            href: item.href,
            style: {
                width: "100%",
                height: "65vh",
                "@media (min-width: 56em)": {
                    margin: "0 0 3vh 3vh",
                    width: "calc(50% - 3vh)"
                }
            }
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(item) {
        return {
            style: {
                margin: (this.state.inView ? "0 0 0 0" : "5vh 0 0 0"),
                opacity: (this.state.inView ? "1" : "0"),
                width: "100%",
                height: "100%",
                color: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + item.backgroundImage + ")",
                transition: "all 1s ease",
                "@media (min-width: 56em)": {
                    margin: (this.state.inView ? "0 0 0 0" : (item.odd ? "7.5vh" : "15vh") + " 0 0 0"),
                }
            }
        }
    }

    /**
    * Settings for: _largeText
    *
    * @function _largeText
    * @return {object}
    */
    _largeText(item) {
        return {
            style: {
                margin: "1.5vh 0 0 0",
                paddingTop: (this.state.inView ? "0" : "25%"),
                fontFamily: "Lato, sans-serif",
                fontSize: "6.5vw",
                letterSpacing: "1vw",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "padding 1s ease",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    fontSize: "4.5vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "2vw",
                    letterSpacing: "0.5vw"
                }
            },
            text: item.largeText
        }
    }

    /**
    * Settings for: _overlayContainer
    *
    * @function _overlayContainer
    * @return {object}
    */
    _overlayContainer(item) {
        return {
            style: {
                width: "100%",
                height: "100%"
            }
        }
    }

    /**
    * Settings for: _overlayContainerBackground
    *
    * @function _overlayContainerBackground
    * @return {object}
    */
    _overlayContainerBackground(item) {
        return {
            style: {
                position: "relative",
                top: "0vh",
                left: "0vw",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _overlayContainerBackgroundText
    *
    * @function _overlayContainerBackgroundText
    * @return {object}
    */
    _overlayContainerBackgroundText(item) {
        return {
            style: {
                paddingBottom: (this.state.inView ? "0" : "25%"),
                fontFamily: "Raleway, sans-serif",
                fontSize: "40vw",
                color: "rgba(255,255,255,0.2)",
                transition: "all 1s ease",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    fontSize: "25vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "12.5vw"
                }
            },
            text: item.backgroundText
        }
    }

    /**
    * Settings for: _overlayContainerText
    *
    * @function _overlayContainerText
    * @return {object}
    */
    _overlayContainerText(item) {
        return {
            style: {
                position: "relative",
                top: "-100%",
                left: "0vw",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _smallText
    *
    * @function _smallText
    * @return {object}
    */
    _smallText(item) {
        return {
            style: {
                fontFamily: "Josefin Sans, serif",
                paddingTop: (this.state.inView ? "0" : "50%"),
                fontSize: "5vw",
                letterSpacing: "0.5vw",
                transition: "all 1s ease",
                "@media (min-width: 40em) and (max-width: 56em)": {
                    fontSize: "3vw"
                },
                "@media (min-width: 56em)": {
                    fontSize: "2vw"
                }
            },
            text: item.smallText
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {item, ...other} = this.props;
        let _a = this._a(item);
        let _div = this._div(item);
        let _largeText = this._largeText(item);
        let _overlayContainer = this._overlayContainer(item);
        let _overlayContainerBackground = this._overlayContainerBackground(item);
        let _overlayContainerBackgroundText = this._overlayContainerBackgroundText(item);
        let _overlayContainerText = this._overlayContainerText(item);
        let _smallText = this._smallText(item);
        return (
            <a href={_a.href} style={_a.style} onClick={(e) => this.handleClick(e, _a.href)} onMouseEnter={(e) => this.handleMouseEnter(e)} onMouseLeave={(e) => this.handleMouseLeave(e)}>
                <div ref={(c) => this.item = c} className="div" style={_div.style}>
                    <div className="overlayContainer" style={_overlayContainer.style}>
                        <div className="overlayContainerBackground" style={_overlayContainerBackground.style}>
                            <div className="overlayContainerBackgroundText" style={_overlayContainerBackgroundText.style}>
                                {_overlayContainerBackgroundText.text}
                            </div>
                        </div>
                        <div className="overlayContainerText" style={_overlayContainerText.style}>
                            <div className="smallText" style={_smallText.style}>{_smallText.text}</div>
                            <div className="largeText" style={_largeText.style}>{_largeText.text}</div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }    
}
// Export
module.exports = Radium(NextPortfolioContainerItem);