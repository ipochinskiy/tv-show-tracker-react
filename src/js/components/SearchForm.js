import React from 'react';
import './SearchForm.scss';

const SearchForm = ({ onChange, onSubmit }) => (
    <div className="SearchForm">
        <input
            className="SearchForm-input"
            type="text"
            placeholder="Type in a show's name"
            onChange={(e) => onChange(e.target.value)}
        />
        <button className="SearchForm-button" onClick={onSubmit}>Search</button>
    </div>
);

export default SearchForm;
