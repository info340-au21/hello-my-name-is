import React from 'react';
import { NavLink} from 'react-router-dom';

export function NameInDB(props) {
    return (
        <div className="alert center">
            <h1>This name is already in the database!</h1>
            <NavLink to='/'><button type="submit" className="btn btn-light">Search for the name here!</button></NavLink>
        </div>
    )
}

