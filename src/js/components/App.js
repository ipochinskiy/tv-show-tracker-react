import React from 'react';
import { connect } from "react-redux";
import { appLoaded, searchShow } from '../actions/index';
import './App.scss';
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";
import ShowList from "./ShowList";

const alphabet = [
    '0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const genreList = [
    'Action', 'Adventure', 'Animation', 'Children', 'Comedy',
    'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
    'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
    'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller', 'Travel',
];

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { selectedLetter: null, selectedGenre: null };

        this.selectGenre = this.selectGenre.bind(this);
        this.selectLetter = this.selectLetter.bind(this);
        this.onSubmitSearchQuery = this.onSubmitSearchQuery.bind(this);
    }

    componentDidMount() {
        this.props.appLoaded();
    }

    selectLetter(letter) {
        this.setState({ selectedLetter: letter });
    }

    selectGenre(genre) {
        this.setState({ selectedGenre: genre });
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
