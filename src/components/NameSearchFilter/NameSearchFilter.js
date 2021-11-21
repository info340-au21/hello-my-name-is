import React from 'react';
import { GenderFilter } from './GenderFilter';
import { DetailedFilter } from './DetailedFilter';

export function NameSearchFilter(props) {
    return (
        <div className="section container column">
            <div className="row"><SearchBar/></div>

            <div className="row"><GenderFilter/></div>

            <DetailedFilter/>

            <div className="row"><GetNamesButton/></div>
        </div>
    )
}


// Search
function SearchBar(props) {
    // let searchStr = props.search;

    // create input and change placeholder to searchStr

    return (
        <h2 className="item center">
            Names like 
            {/* Hard-coded placeholder (should be user input) */}
            <input type="text" placeholder="NALU" className="search"/>
            :
        </h2>
    )
}


// Match button
function GetNamesButton() {
    return (
        <div className="item">
            <button type="button" className="btn btn-light">Get names</button>
        </div>
    )
}