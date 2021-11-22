import React from 'react';

export function generateHeader() {
    return (
        <header>
            <div className="book-container">
                <h1>Bookmarked names</h1>
                <p className="fav name">Here is the list of your favorite names</p>
            </div>
        </header>
    )
}