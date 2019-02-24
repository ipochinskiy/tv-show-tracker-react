import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('Component: SearchForm', () => {
    it('should render an input field with a placeholder', () => {
        const component = shallow(<SearchForm />);

        expect(component.find('input').first().props().placeholder).toBe('Type in a show\'s name');
    });

    it('should render a button', () => {
        const component = shallow(<SearchForm />);

        expect(component.find('button').first().text()).toBe('Search');
    });

    describe('and after some text is typed in and the button is clicked', () => {
        let props;

        beforeEach(() => {
            props = {
                onSubmit: jest.fn(),
            };
            const component = shallow(<SearchForm {...props} />);
            component.find('input').simulate('change', {
                target: {
                    value: 'bazzinga!',
                },
            });
            component.find('button').simulate('click');
        });

        it('should submit the change', () => {

            expect(props.onSubmit).toHaveBeenCalledWith('bazzinga!');
        });
    });
});
