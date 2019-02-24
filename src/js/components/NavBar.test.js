import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import NavBar from './NavBar';

describe('Component: NavBar', () => {
    it('should render the logo', () => {
        const component = mount(<MemoryRouter><NavBar /></MemoryRouter>);

        expect(component).toHaveText("ShowTrackr");
    });

    it('should render a link to the home page', () => {
        const component = mount(<MemoryRouter><NavBar /></MemoryRouter>);

        expect(component.find('a').first().props().href).toBe('/');
    });
});
