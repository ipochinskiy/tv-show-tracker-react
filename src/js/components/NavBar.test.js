import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('Component: NavBar', () => {
    it('should render the logo', () => {
        const component = shallow(<NavBar />);

        expect(component).toHaveText("ShowTrackr");
    });

    it('should render a link to the home page', () => {
        const component = shallow(<NavBar />);

        expect(component.find('a').first().props().href).toBe('/');
    });
});
