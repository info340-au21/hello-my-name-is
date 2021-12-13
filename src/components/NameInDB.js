import React from 'react';


export function NameInDB(props) {
    return (
        <div className="alert center">
            <h1>This name is already in the database!</h1>
            <button type="submit" className="btn btn-light"><a href='/submit'>Search for the name here!</a></button>
        </div>
    )
}

