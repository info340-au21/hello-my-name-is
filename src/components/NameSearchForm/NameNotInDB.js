import React from 'react';
import { NavLink } from 'react-router-dom';

export function NameNotInDB(props) {
    return (
        <div className="alert center">
            <h1>Oh no!</h1>
            <h3>This name is not in the database!</h3>
            <NavLink to='/submit'><button type="submit" className="btn btn-light">Add this name to the database!</button></NavLink>
        </div>
    )
}

