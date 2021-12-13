import React from 'react';


export function NameNotInDB(props) {
    return (
        <div className="alert center">
            <h1>Oh no!</h1>
            <h3>This name is not in the database!</h3>
            <button type="submit" className="btn btn-light"><a href='/submit'>Add this name to the database!</a></button>
        </div>
    )
}

