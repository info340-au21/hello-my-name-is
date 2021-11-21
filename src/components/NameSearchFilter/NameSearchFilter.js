import React from 'react';
import { GenderFilter } from './GenderFilter';
import { FilterSimilar } from './FilterSimilar';
import { FilterMatching } from './FilterMatching';

export function NameSearchFilter() {
    return (
        <div className="section container column">
            <div className="row"><SearchBar/></div>

            <div className="row"><GenderFilter/></div>

            <div className="row">
                <FilterSimilar/>
                <FilterMatching/>
            </div>

            <div className="row"><GetNamesButton/></div>
        </div>
    )
}


// Search
function SearchBar() {
    return (
        <h2 className="item center">
            Names like 
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