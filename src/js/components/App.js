import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { appLoaded } from '../actions/index';
import './App.scss';
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";
import ShowList from "./ShowList";

export class App extends React.Component  {
    constructor(props) {
        super(props);
    }

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
