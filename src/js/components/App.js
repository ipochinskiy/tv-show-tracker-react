import React from 'react';
import { connect } from "react-redux";
import { appLoaded, searchShow } from '../actions/index';
import './App.scss';
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";
import ShowList from "./ShowList";

export class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { selectedLetter: null, selectedGenre: null };

        this.onSubmitSearchQuery = this.onSubmitSearchQuery.bind(this);
    }

    componentDidMount() {
        this.props.appLoaded();
    }

    onSubmitSearchQuery(searchQuery) {
        if (!searchQuery) {
            return;
        }

        const { token } = this.props;
        this.props.searchShow(searchQuery, token);
    }

    render() {
        const { selectedLetter, selectedGenre } = this.state;
        const { showList = [] } = this.props;

        return (
            <div className="App">
                <NavBar />
                <div className="App-content">
                    {showList.length > 0
                        ? <ShowList showList={showList} />
                        : <SearchForm onSubmit={this.onSubmitSearchQuery}/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showList: state.showList,
        token: state.token,
    };
};

export default connect(mapStateToProps, {
    searchShow,
    appLoaded,
})(App);
