/**
* AppDashboardContentSeedEditor.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
* AppDashboardContentSeedEditor
*
* @module AppDashboardContentSeedEditor
*/
class AppDashboardContentSeedEditor extends React.Component {

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
                "@media (min-width: 48em) and (max-width: 64em)": {
                },
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __editor
    *
    * @function __editor
    * @return {object}
    */
    __editor(seed) {
        let payload = [];
        for (let i in seed) {
            payload.push(
                <input type="text" value={i} />
            );
            if (typeof seed[i] !== "object") {
                payload.push(
                    <input type="text" value={seed[i]} />
                );    
            }
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, ...other} = this.props;
        console.log(content);
        console.log(content.site.seed);
        let _div = this._div(); 
        let __editor = this.__editor(content.site.seed);
        return (
            <div className="div" style={_div.style}>
                {__editor}
            </div>
        )
    }    
}
// Export
module.exports = Radium(AppDashboardContentSeedEditor);