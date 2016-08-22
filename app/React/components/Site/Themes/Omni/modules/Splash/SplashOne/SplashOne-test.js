/**
* SplashOne-test.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires enzyme
* @requires SplashOne
*/

import React from 'react';
import { shallow, mount, render } from 'enzyme';
//import renderer from 'react-test-renderer';
const SplashOne = require('./SplashOne.jsx');
const wrapper = shallow(<SplashOne />);
console.log(wrapper.props());

describe('SplashOne', () => {
    it('should have 1 section tag', () => {
        expect(wrapper.find('section').length).toBe(1);
    });

    it('should have 2 div tags', () => {
        expect(wrapper.find('div').length).toBe(2);
    });
});