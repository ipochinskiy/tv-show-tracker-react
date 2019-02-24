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
        const { showList = [] } = this.props;

        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div className="App-content">
                        <Switch>
                            <Route exact path="/" component={SearchForm} />
                            <Route path="/search" component={SearchForm} />
                        </Switch>
                        {showList.length > 0
                            ? <ShowList showList={showList} />
                            : <SearchForm onSubmit={this.onSubmitSearchQuery} />
                        }
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        showList: state.showList,
    };
};

export default connect(mapStateToProps, {
    appLoaded,
})(App);
