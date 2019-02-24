import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ShowList } from './ShowList';
import ShowItemCompact from './ShowItemCompact';

describe('Component: ShowList', () => {
    let props;

    beforeEach(() => {
        props = createComponentProps();
    });

    it('should render no show items', () => {
        const component = shallow(<ShowList {...props} />);

        expect(component.find(ShowItemCompact).length).toBe(0);
    });

    it('should render empty state', () => {
        const component = shallow(<ShowList {...props} />);

        expect(component).toHaveText('Nothing is there');
    });

    describe('and with show list set', () => {
        beforeEach(() => {
            props = createComponentProps({
                showList: [
                    { id: 'The Big Bang Theory' },
                    { id: 'The Walking Dead' },
                ],
            });
        });

        it('should render ShowItemCompact for every show item', () => {
            const component = shallow(<ShowList {...props} />);

            expect(component.find(ShowItemCompact).length).toBe(2);
        });
    });
});

function createComponentProps(options) {
    return {
        showList: [],
        ...options,
    };
}
