import React, { useState } from 'react';
import { NameSearchFilter } from './NameSearchFilter/NameSearchFilter';
import { NameSearchResults } from './NameSearchResults';
import { NameNotInDB } from './NameNotInDB'


export function NameSearchForm(props) {
    let {allNameObjArr, genders, callback, booked, handleBook} = props;

    // Get name from search bar
    const [searchedNameObj, setSearchedNameObj] = useState({
        name: "",
        pronunciation: null,
        gender: null,
        meaning: null,
        origin: null
    });
    const handleSearch = (event) => {
        let searchedNameStr = event.target.value;
        let matchingNameObj = allNameObjArr.find(dbNameObj => dbNameObj.name === searchedNameStr);

        setSearchedNameObj(matchingNameObj);
    }
    // console.log(searchedNameObj); // testing

    // Filter based off of name and selected/inputed filters
    const [filterObj, setFilterObj] = useState({
        origin: null,
        length: null,
        firstNumLetters: null,
        pronunciation: null,
        meaning: null,
        gender: null
    })

    // Display results
    const [resultNameObjArr, setResultNameObjArr] = useState(allNameObjArr);

    // When "Get names" is clicked, apply filters to a copy of name dataset
    const handleClickGetNames = () => {
        // Start with all data in database
        let filteredNameObjArr = allNameObjArr;

        // Filter matching
        function filterMatchingFn(filterParam, filterFn) {
            if (filterObj[filterParam] !== null) {
                filteredNameObjArr = filteredNameObjArr.filter(filterFn)
            }
        }
        // By origin
        filterMatchingFn('origin', (dbNameObj) =>  dbNameObj.origin === searchedNameObj.origin);

        // By name length
        filterMatchingFn('length', (dbNameObj) => dbNameObj.name.length === searchedNameObj.name.length);

        // By first # letters
        let firstNumLetters = filterObj.firstNumLetters;
        let searchedNameFirstLetters = searchedNameObj.name.substring(0, firstNumLetters);
        filterMatchingFn('firstNumLetters', (dbNameObj) => dbNameObj.name.substring(0, firstNumLetters) === searchedNameFirstLetters);

        // Update results
        setResultNameObjArr(filteredNameObjArr);
        console.log(filteredNameObjArr);
    }

    if(resultNameObjArr.length < 0) {
        return (
            <NameNotInDB />
        )
    } else {
        return (
            <div>
                <NameSearchFilter
                    genders={props.genders}
                    callback={props.callback}
                    nameDataObjArr={props.nameDataObjArr}
                />
    
                {/* Then trigger update results */}
                <div className="row">
                    <GetNamesButton callback={handleClickGetNames}/>
                </div>
                
                <NameSearchResults
                    results={resultNameObjArr}
                    // allData={props.allData}
                    booked={props.booked}
                    handleBook={props.handleBook}
                />
            </div>
        )
    }
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
function GetNamesButton(props) {
    return (
        <div className="item">
            <button
                type="button"
                className="btn btn-light"
                onClick={props.callback}
            >
                Get names
            </button>
        </div>
    )
}