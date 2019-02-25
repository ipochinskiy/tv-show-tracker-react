import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import NavBar from './NavBar';

describe('Component: NavBar', () => {
    it('should render the logo', () => {
        const component = mount(<MemoryRouter><NavBar /></MemoryRouter>);

        expect(component).toIncludeText('ShowTrackr');
    });

    it('should render navigation links', () => {
        const component = mount(<MemoryRouter><NavBar /></MemoryRouter>);
        const linkList = component.find(Link).map(node => node.props().to);

        expect(linkList).toEqual([ '/', '/search' ]);
    });
});
