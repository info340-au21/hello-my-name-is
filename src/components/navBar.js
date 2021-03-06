import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavIcon() {
    return (
        <nav>
            <div id="hamburger-menu"><a><i className="fa fa-bars" aria-label="menu"></i></a></div>
            <div className="nav" id="links">
                <NavLink exact to="/" activeClassName="selected"><i className="material-icons" aria-label="Home">home</i></NavLink>
                <NavLink to="/bookmark" activeClassName="selected"><i className="material-icons" aria-label="bookmarks">bookmarks</i></NavLink>
                <NavLink to="/submit" activeClassName="selected"><i className="material-icons" aria-label="Enter a name">add</i></NavLink>
            </div>
        </nav>
    )
}