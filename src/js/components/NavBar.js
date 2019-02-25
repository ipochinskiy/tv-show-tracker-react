import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './NavBar.scss';

const NavBar = () => (
    <div className="NavBar" role="navigation">
        <div className="NavBar-header">
            <Link to="/">
                <span className="glyphicon glyphicon-film"></span>
                &nbsp;Show<strong>Trackr</strong>
            </Link>
        </div>
        <div className="NavBar-content">
            <NavLink to="/search" className="NavBar-item" activeClassName="NavBar-item-active">Search</NavLink>
        </div>
    </div>
);

export default NavBar;
