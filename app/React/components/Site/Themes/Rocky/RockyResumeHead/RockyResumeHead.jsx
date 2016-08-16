/**
* RockyResumeHead.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
var React = require('react');
var Radium = require('radium');

/**
* Rocky's personal website
*
* @module RockyResumeHead
*/
var RockyResumeHead = React.createClass({

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
    * Settings for: _descriptionContainer
    *
    * @function _descriptionContainer
    * @return {object}
    */
    _descriptionContainer: function() {
        return {
            style: {
                width: "100%",
                height: "10vh",
                "@media (min-width: 64em)": {
                    width: "100%"
                },
                "@media print": {
                    width: "100%"
                }
            }
        }
    },  

    /**
    * Settings for: _email
    *
    * @function _email
    * @return {object}
    */
    _email: function() {
        return {
            style: {
                "@media (min-width: 64em)": {
                },
                "@media print": {
                }
            }
        }
    }, 

    /**
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image: function() {
        return {
            style: {
                backgroundColor: "green",
                width: "15vh",
                height: "15vh",
                borderRadius: "50%",
                "@media (min-width: 64em)": {
                },
                "@media print": {
                    width: "11vh",
                    height: "11vh"   
                }
            }
        }
    },   

    /**
    * Settings for: _imageContainer
    *
    * @function _imageContainer
    * @return {object}
    */
    _imageContainer: function() {
        return {
            style: {
                width: "100%",
                height: "25vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    margin: "0 0 0 10%",
                    width: "20%"
                },
                "@media print": {
                    margin: "0 0 0 10%",
                    width: "20%",
                    height: "15vh"
                }
            }
        }
    },    

    /**
    * Settings for: _info
    *
    * @function _info
    * @return {object}
    */
    _info: function() {
        return {
            style: {
                fontFamily: "titilliumlight",
                whiteSpace: "nowrap",
                "@media (min-width: 64em)": {
                },
                "@media print": {
                }
            }
        }
    }, 

    /**
    * Settings for: _infoContainer
    *
    * @function _infoContainer
    * @return {object}
    */
    _infoContainer: function() {
        return {
            style: {
                width: "100%",
                height: "10vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                "@media (min-width: 64em)": {
                    width: "70%"
                },
                "@media print": {
                    width: "70%"
                }
            }
        }
    },  

    /**
    * Settings for: _name
    *
    * @function _name
    * @return {object}
    */
    _name: function() {
        return {
            style: {
                fontSize: "18px",
                "@media (min-width: 64em)": {
                    fontSize: "5vh"
                },
                "@media print": {
                    fontSize: "5vh"
                }
            }
        }
    },   

    /**
    * Settings for: _phone
    *
    * @function _phone
    * @return {object}
    */
    _phone: function() {
        return {
            style: {
                "@media (min-width: 64em)": {
                },
                "@media print": {
                }
            }
        }
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
                padding: "2vh 0 0 0",
                width: "100%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    width: "80%",
                    backgroundColor: "rgba(230,230,230,1)",
                },
                "@media print": {
                    backgroundColor: "rgba(230,230,230,1)"
                }
            }
        }
    },  

    /**
    * Settings for: _title
    *
    * @function _title
    * @return {object}
    */
    _title: function() {
        return {
            style: {
                "@media (min-width: 64em)": {
                },
                "@media print": {
                }
            }
        }
    },   

    /**
    * Settings for: _website
    *
    * @function _website
    * @return {object}
    */
    _website: function() {
        return {
            style: {
                "@media (min-width: 64em)": {
                },
                "@media print": {
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
        var {site, ...other} = this.props;
        let _descriptionContainer = this._descriptionContainer();
        let _email = this._email();
        let _image = this._image();
        let _imageContainer = this._imageContainer();
        let _info = this._info();
        let _infoContainer = this._infoContainer();
        let _name = this._name();
        let _phone = this._phone();
        let _title = this._title();
        let _website = this._website();
        let _section = this._section();
        return (
            <section className="section" style={_section.style}>
                <div className="imageContainer" style={_imageContainer.style}>
                    <div className="image" style={_image.style}></div>
                </div>
                <div className="infoContainer" style={_infoContainer.style}>
                    <div className="name" style={[_info.style, _name.style]}>Rocky Eastman</div>
                    <div className="title" style={[_info.style, _title.style]}>Web Developer</div>
                    <div className="website" style={[_info.style, _website.style]}>rockyeastman.com</div>
                    <div className="email" style={[_info.style, _email.style]}>eastmanrjr@gmail.com</div>
                    <div className="phone" style={[_info.style, _phone.style]}>509 386 8772</div>
                </div>
                <div className="descriptionContainer" style={_descriptionContainer.style}>
                </div>
            </section>
        )
    }    
});
module.exports = Radium(RockyResumeHead);