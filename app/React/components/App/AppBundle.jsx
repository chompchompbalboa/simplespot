/**
* AppBundle.jsx
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires StyleRoot
* @requires React
* @requires Radium
* @requires siteStore
* @requires siteActions
* @requires utils
* @requires App
*/
import {StyleRoot} from 'radium';
const React = require('react');
const Radium = require('radium');

const contentStore = require('../../stores/contentStore');
const contentActions = require('../../actions/contentActions');

const App = require('./App.jsx');
/**
* The bundler for the app.
*
* @module AppBundle
*/
class AppBundle extends React.Component {

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
        window.addEventListener('popstate', (e) => contentActions.replaceContent(e.state.content));
        contentStore.addChangeListener(this._onChange); 
        contentActions.fetchContent("INITIAL_APP");
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
                    <App content={this.state.content} />
                </StyleRoot>
            ) 
        }
        else {
            return (
                <StyleRoot>
                    <section id="app">
                    </section>
                </StyleRoot>
            ) 
        } 
    }    
}
module.exports = Radium(AppBundle);