import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './NavBar';
import { appLoaded } from './show/actions/show-actions';
import SearchForm from './show/components/SearchForm';
import ShowList from './show/components/ShowList';

export class App extends React.Component  {
    componentDidMount() {
        this.props.appLoaded();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div className="App-content">
                        <Switch>
                            <Route exact path="/" component={SearchForm} />
                            <Route path="/search" component={SearchForm} />
                            <Route path="/shows" component={ShowList} />
                            {/* <Route path="/about" component={About} /> */}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default connect(undefined, {
    appLoaded,
})(App);
