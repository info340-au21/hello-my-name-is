import React, { useState } from 'react';
import { GenderFilter } from './GenderFilter';
import { DetailedFilter } from './DetailedFilter';

export function NameSearchFilter(props) {
    const [searchedNameStr, setSearchedNameStr] = useState('');
    const handleSearch = (event) => {
        setSearchedNameStr(event.target.value);
    }

    // Get associated name object from nameData based on the name typed in the search bar
    // console.log("Current searched name: " + searchedNameStr); // testing
    let searchedNameObj = props.nameDataObjArr.find(nameDataObj => nameDataObj.name === searchedNameStr);

    return (
        <div className="section container column">
            {/* First get name */}
            <div className="row">
                <SearchBar callback={handleSearch}/>
            </div>

            {/* Then filter names based on given name */}
            <DetailedFilter
                results={props.results}
                // searchedNameStr={searchedNameStr}
                searchedNameObj={searchedNameObj}
                nameDataObjArr={props.nameDataObjArr}
            />

            {/* Then filter by gender */}
            <div className="row">
                <GenderFilter
                    genders={props.genders}
                    callback={props.callback}
                />
            </div>

            {/* Then trigger update results */}
            <div className="row">
                <GetNamesButton/>
            </div>
        </div>
    )
}


// Search
function SearchBar(props) {
    return (
        <h2 className="item center">
            Names like...
            {/* Hard-coded placeholder (should be user input) */}
            <input
                type="text"
                placeholder="ENTER NAME"
                className="search"
                onChange={props.callback}
            />
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