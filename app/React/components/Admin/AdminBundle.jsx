/**
* AdminBundle.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires StyleRoot
* @requires React
* @requires Radium
* @requires contentStore
* @requires contentActions
* @requires Admin
* @requires App
* @requires Site
*/
import {StyleRoot} from 'radium';
const React = require('react');
const Radium = require('radium');

const contentStore = require('../../stores/contentStore');
const contentActions = require('../../actions/contentActions');

const Admin = require('./Admin.jsx');
const App = require('../App/App.jsx');
const Site = require('../Site/Site.jsx');

/**
* The bundler for the app.
*
* @module AdminBundle
*/
class AdminBundle extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
        this._onChange = this._onChange.bind(this);
    }

    /**
    * Component Did Mount
    *
    * @function componentDidMount
    */
    componentDidMount() {
        window.history.replaceState({content: this.state.content}, "", window.location.pathname);
        window.addEventListener('popstate', (e) => contentActions.replaceContent(e.state.content));
        contentStore.addChangeListener(this._onChange); 
        contentActions.fetchContent("INITIAL_ADMIN");
    }

    /**
    * Component Will Unmount
    *
    * @function componentWillUnmount
    */
    componentWillUnmount() {
        window.removeEventListener('popstate', (e) => contentActions.replaceContent(e.state.content));
        displayStore.removeChangeListener(this._onChange);
    }

    /**
    * On Change
    *
    * Update the state tree when the content store emits a change event
    *
    * @function onChange
    */
    _onChange() {
      this.setState({
            content: contentStore.getContent()
      });
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        if(this.state.content !== null) {
            return (
                <StyleRoot>
                    <Admin content={this.state.content} />
                    <Site content={this.state.content} />
                </StyleRoot>
            ) 
        }
        else {
            return (
                <StyleRoot>
                    <section id="admin">
                    </section>
                </StyleRoot>
            ) 
        } 
    }    
}
module.exports = Radium(AdminBundle);