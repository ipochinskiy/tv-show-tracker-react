import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import { App } from './App';
import NavBar from './NavBar';
import SearchForm from './show/components/SearchForm';
import ShowList from './show/components/ShowList';

describe('Component: App', () => {
    let props;

    beforeEach(() => {
        props = createComponentProps();
    });

    it('should deeply render without crashing', () => {
        const div = document.createElement('div');
        const dummyStore = createStore(state => ({}));
        const wrappedComponenet = (
            <Provider store={dummyStore}>
                <App {...props} />
            </Provider>
        );

        ReactDOM.render(wrappedComponenet, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render the navigation bar', () => {
        const component = shallow(<App {...props} />);

        expect(component).toContainReact(<NavBar />);
    });

    it('should signalize the app is loaded after component did mount', () => {
        const component = shallow(<App {...props} />);

        expect(props.appLoaded).toHaveBeenCalled();
    });
});

function createComponentProps(options) {
    return {
        appLoaded: jest.fn(),
        ...options,
    };
}
