import React from 'react';
import './SearchForm.scss';

class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { searchQuery: null};
        this.onChange = this.onChange.bind(this);
    }

    onChange(searchQuery) {
        this.setState({ searchQuery });
    }

    render() {
        const { onSubmit } = this.props;
        const { searchQuery } = this.state;

        return (
            <div className="SearchForm">
                <input
                    className="SearchForm-input"
                    type="text"
                    placeholder="Type in a show's name"
                    onChange={(e) => this.onChange(e.target.value)}
                />
                <button className="SearchForm-button" onClick={() => onSubmit(searchQuery)}>Search</button>
            </div>
        );
    }
}

export default SearchForm;
