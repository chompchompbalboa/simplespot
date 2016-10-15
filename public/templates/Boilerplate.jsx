/**
* {*( Boilerplate )*}.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
import React, { PropTypes } from 'react';
import Radium from 'radium';

{*( include )*}
/**
* {*( Boilerplate )*}
*
* @module {*( Boilerplate )*}
*/
class {*( Boilerplate )*} extends React.Component {

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
        {*( element )*}: React.PropTypes.object.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        {*( element )*}: {}
    }

    /**
    * Settings for: _{*( element )*}
    *
    * @function _{*( element )*}
    * @return {object}
    */
    _{*( element )*}({*( element )*}) {
        return {
            style: {}
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {{*( element )*}, ...other} = this.props;
        let _{*( element )*} = this._{*( element )*}({*( element )*});
        return (
            <{*( element )*} className="{*( element )*}" style={_{*( element )*}.style}>
                {*( Boilerplate )*}
            </{*( element )*}>
        )
    }    
}
// Export
module.exports = Radium({*( Boilerplate )*});