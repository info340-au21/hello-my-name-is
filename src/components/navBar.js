import React from 'react';

export function NavIcon() {
    return (
        <nav>
            <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
            <div className="nav" id="links">
                <a href="index.html"><i className="material-icons" aria-label="Home">home</i></a>
                <a href="bookmark.html"><i className="material-icons" aria-label="bookmarks">bookmarks</i></a>
                <a href="enter-name.html"><i className="material-icons" aria-label="Enter a name">add</i></a>
            </div>
            <div className="search">
                <input type="text" placeholder="Search for a name" className="search" />
            </div>
        </nav>
    )
}