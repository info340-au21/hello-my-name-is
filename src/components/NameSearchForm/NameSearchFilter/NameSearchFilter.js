import React, { useState } from 'react';
import { GenderFilter } from './GenderFilter';
import { DetailedFilter } from './DetailedFilter';

export function NameSearchFilter(props) {
    let {searchedNameObj, nameDataObjArr, genders, callback, filterObj, setFilterObj} = props;
    // SearchBar
    // const [searchedNameObj, setSearchedNameObj] = useState(undefined);
    // const handleSearch = (event) => {
    //     let searchedNameStr = event.target.value;

    //     setSearchedNameObj(props.nameDataObjArr.find(nameDataObj => nameDataObj.name === searchedNameStr));
    // }
    // console.log(searchedNameObj); // testing

    return (
        <div className="section container column">
            {/* First get name */}
            {/* <div className="row">
                <SearchBar callback={handleSearch}/>
            </div> */}

            {/* Then filter names based on given name */}
            <DetailedFilter
                // results={props.results}
                // searchedNameStr={searchedNameStr}
                searchedNameObj={searchedNameObj}
                nameDataObjArr={nameDataObjArr}
            />

            {/* Then filter by gender */}
            <div className="row">
                <GenderFilter
                    genders={genders}
                    callback={callback}
                />
            </div>

            {/* Then trigger update results */}
            {/* <div className="row">
                <GetNamesButton/>
            </div> */}
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


// // Match button
// function GetNamesButton() {
//     return (
//         <div className="item">
//             <button type="button" className="btn btn-light">Get names</button>
//         </div>
//     )
// }