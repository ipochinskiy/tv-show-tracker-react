import React from 'react';
import './NavBar.scss';

const NavBar = () => (
    <div className="NavBar" role="navigation">
        <div className="NavBar-header">
            <a className="NavBar-brand" href="/">
                <span className="glyphicon glyphicon-film"></span>
                Show<strong>Trackr</strong>
            </a>
        </div>
    </div>
);

export default NavBar;
