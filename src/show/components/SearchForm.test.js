import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SearchForm } from './SearchForm';

describe('Component: SearchForm', () => {
    let props;

    beforeEach(() => {
        props = createComponentProps();
    });

    it('should render an input field with a placeholder', () => {
        const component = shallow(<SearchForm {...props} />);

        expect(component.find('input').first().props().placeholder).toBe('Type in a show\'s name');
    });

    it('should render a button', () => {
        const component = shallow(<SearchForm {...props} />);

        expect(component.find('button').first().text()).toBe('Search');
    });

    describe('and after the button is clicked with a search query', () => {
        beforeEach(() => {
            const component = shallow(<SearchForm {...props} />);
            component.find('input').simulate('change', {
                target: {
                    value: 'bazzinga!',
                },
            });
            component.find('button').simulate('click');
        });

        it('should submit the change', () => {

            expect(props.searchShow).toHaveBeenCalledWith('bazzinga!', 'i bims 1 token vong auth her');
        });

        it('should navigate to the show list', () => {

            expect(props.history.push).toHaveBeenCalledWith('/shows');
        });
    });

    describe('and after the button is clicked without search query', () => {
        beforeEach(() => {
            const component = shallow(<SearchForm {...props} />);
            component.find('button').simulate('click');
        });

        it('should not submit the change', () => {

            expect(props.searchShow).not.toHaveBeenCalled();
        });

        it('should not navigate to the show list', () => {

            expect(props.history.push).not.toHaveBeenCalled();
        });
    });

    describe('and after the button is clicked with a search query but without token', () => {
        beforeEach(() => {
            props = createComponentProps({
                token: undefined,
            });
            const component = shallow(<SearchForm {...props} />);
            component.find('input').simulate('change', {
                target: {
                    value: 'bazzinga!',
                },
            });
            component.find('button').simulate('click');
        });

        it('should not submit the change', () => {

            expect(props.searchShow).not.toHaveBeenCalled();
        });

        it('should not navigate to the show list', () => {

            expect(props.history.push).not.toHaveBeenCalled();
        });
    });

    describe('and after the button is clicked with a search query but without history', () => {
        beforeEach(() => {
            props = createComponentProps({
                history: undefined,
            });
            const component = shallow(<SearchForm {...props} />);
            component.find('input').simulate('change', {
                target: {
                    value: 'bazzinga!',
                },
            });
            component.find('button').simulate('click');
        });

        it('should not submit the change', () => {

            expect(props.searchShow).not.toHaveBeenCalled();
        });
    });
});

function createComponentProps(options) {
    return {
        token: 'i bims 1 token vong auth her',
        searchShow: jest.fn(),
        history: {
            push: jest.fn(),
        },
        ...options,
    };
}
