import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.scss';

const NavBar = () => (
    <div className="NavBar" role="navigation">
        <div className="NavBar-header">
            <Link to="/">
                <div className="NavBar-brand" >
                    <span className="glyphicon glyphicon-film"></span>
                    &nbsp;Show<strong>Trackr</strong>
                </div>
            </Link>
        </div>
    </div>
);

export default NavBar;
