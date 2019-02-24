import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import NavBar from './NavBar';
import SearchForm from './SearchForm';
import ShowList from './ShowList';

const DEFAULT_PROPS = {
    searchShow: jest.fn(),
    appLoaded: jest.fn(),
};

describe('Component: App', () => {
    let props;

    beforeEach(() => {
        props = {
            ...DEFAULT_PROPS,
        };
    });

    it('should deeply render without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<App {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render the navigation bar', () => {
        const component = shallow(<App {...props} />);

        expect(component).toContainReact(<NavBar />);
    });

    it('should signalize the app is loaded after component did mount', () => {
        const component = shallow(<App {...props} />);

        expect(props.appLoaded).toHaveBeenCalledWith();
    });

    describe('with "showList" containing 0 items', () => {
        beforeEach(() => {
            props = {
                ...DEFAULT_PROPS,
                showList: [],
                token: 'i bims 1 token vong auth her',
            };
        });

        it('should render the search form', () => {
            const component = shallow(<App {...props} />);

            expect(component).toContainMatchingElement(SearchForm);
        });

        describe('and after the search form submits a query', () => {
            beforeEach(() => {
                const component = shallow(<App {...props} />);
                component.find(SearchForm).simulate('submit', 'bazzinga!');
            });

            it('should call "searchShow" in props', () => {

                expect(props.searchShow).toHaveBeenCalledWith('bazzinga!', 'i bims 1 token vong auth her');
            });
        });
    });

    describe('with "showList" containing 1 item', () => {
        let showList;

        beforeEach(() => {
            showList = [
                { id: 'The Big Bang Theory' },
            ];
            props = {
                ...DEFAULT_PROPS,
                showList,
            };
        });

        it('should render the show list', () => {
            const component = shallow(<App {...props} />);

            expect(component).toContainReact(<ShowList showList={showList} />);
        });
    });
});
