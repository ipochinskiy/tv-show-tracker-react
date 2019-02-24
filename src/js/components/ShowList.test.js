import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ShowList from './ShowList';
import ShowItemCompact from './ShowItemCompact';

describe('Component: ShowList', () => {
    let props;

    beforeEach(() => {
        props = {
            showList: [
                { id: 'The Big Bang Theory' },
                { id: 'The Walking Dead' },
            ],
        };
    });

    it('should render ShowItemCompact for every show item', () => {
        const component = shallow(<ShowList {...props} />);

        expect(component.find(ShowItemCompact).length).toBe(2);
    });
});
