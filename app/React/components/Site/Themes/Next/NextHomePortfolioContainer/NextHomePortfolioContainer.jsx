/**
* NextHomePortfolioContainer.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

const NextHomePortfolioContainerItems = require('../NextHomePortfolioContainerItems/NextHomePortfolioContainerItems.jsx');
const NextHomePortfolioContainerLabel = require('../NextHomePortfolioContainerLabel/NextHomePortfolioContainerLabel.jsx');

/**
* NextHomePortfolioContainer
*
* @module NextHomePortfolioContainer
*/
class NextHomePortfolioContainer extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
        container: React.PropTypes.object.isRequired,
        div: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        container: {},
        div: {}
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(div) {
        return {
            style: {
                margin: "5vh 0 0 0",
                width: "100%",
                "@media (min-width: 56em)": {
                    margin: "0 0 0 5%",
                    width: "90%"
                },
                "@media (min-width: 64em)": {
                    margin: "0 0 0 7.5%",
                    width: "85%"
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
        var {container, div, ...other} = this.props;
        let _div = this._div(div);
        return (
            <div className="div" style={_div.style}>
                <NextHomePortfolioContainerLabel label={container.label} />
                <NextHomePortfolioContainerItems items={container.items} />
            </div>
        )
    }    
}
// Export
module.exports = Radium(NextHomePortfolioContainer);