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

        expect(component).toHaveText('Nothing found so far, try to search for a show you like');
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

    describe('and with show list loading', () => {
        beforeEach(() => {
            props = createComponentProps({
                isShowListLoading: true,
            });
        });

        it('should render spinner', () => {
            const component = shallow(<ShowList {...props} />);

            expect(component.find('.ShowList-spinner')).toBeTruthy();
        });
    });
});

function createComponentProps(options) {
    return {
        showList: [],
        isShowListLoading: false,
        ...options,
    };
}
