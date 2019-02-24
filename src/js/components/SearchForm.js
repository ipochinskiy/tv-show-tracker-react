import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchShow } from '../actions/index';
import './SearchForm.scss';

export class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { searchQuery: null };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        if (!e.target || !e.target.value) {
            return;
        }
        this.setState({ searchQuery: e.target.value });
    }

    onSubmit() {
        const { searchQuery } = this.state;
        const { token, history } = this.props;
        if (!searchQuery || !token || !history) {
            return;
        }

        this.props.searchShow(searchQuery, token);
        history.push('/shows');
    }

    render() {
        return (
            <div className="SearchForm">
                <input
                    className="SearchForm-input"
                    type="text"
                    placeholder="Type in a show's name"
                    onChange={this.onChange}
                />
                <button className="SearchForm-button" onClick={this.onSubmit}>Search</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    };
};

export default withRouter(connect(mapStateToProps, {
    searchShow,
})(SearchForm));
