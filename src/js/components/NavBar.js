import React from 'react';
import { Link } from "react-router-dom";
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
            <div className="NavBar-item"><Link to="/search">Search</Link></div>
        </div>
    </div>
);

export default NavBar;
