import React, { useState } from 'react';
import { NameSearchFilter } from './NameSearchFilter/NameSearchFilter';
import { NameSearchResults } from './NameSearchResults';

export function NameSearchForm(props) {
    // Filters
    const [searchedNameObj, setSearchedNameObj] = useState({
        name: null,
        origin: "English",
        length: 6,
        firstNumLetters: null,
        pronunciation: null,
        meaning: null,
        gender: null
    });

    // Result names
    const [resultNameObjArr, setResultNameObjArr] = useState(props.allNameObjArr);

    // When "Get names" is clicked, apply filters to a copy of name dataset
    const handleClickGetNames = () => {
        // Start with all data in database
        let filteredNameObjArr = props.allNameObjArr;

        // Filter matching
        function filterMatchingFn(filterParam, filterFn) {
            if (searchedNameObj[filterParam] !== null) {
                filteredNameObjArr = filteredNameObjArr.filter(filterFn)
            }
        }
        // By origin
        filterMatchingFn('origin', (dbNameObj) =>  dbNameObj.origin === searchedNameObj.origin);
        // if (searchedNameObj.origin !== null) {
        //     filteredNameObjArr = filteredNameObjArr.filter((dbNameObj) => {
        //         return dbNameObj.origin === searchedNameObj.origin;
        //     })
        // }
        // By name length
        filterMatchingFn('length', (dbNameObj) => dbNameObj.name.length === searchedNameObj.length);
        // if (searchedNameObj.length !== null) {
        //     filteredNameObjArr = filteredNameObjArr.filter((dbNameObj) => {
        //         return dbNameObj.name.length === searchedNameObj.length;
        //     })
        // }
        // By first # letters
        filterMatchingFn('firstNumLetters', (dbNameObj) => dbNameObj.name.substring(0, searchedNameObj.firstNumLetters) === searchedNameObj.name.substring(0, searchedNameObj.firstNumLetters));
        // if (searchedNameObj.firstNumLetters !== null) {
        //     let firstNumLetters = searchedNameObj.firstNumLetters;

        //     filteredNameObjArr = filteredNameObjArr.filter((dbNameObj) => {
        //         return dbNameObj.name.substring(0, firstNumLetters) === searchedNameObj.name.substring(0, firstNumLetters);
        //     })
        // }

        // console.log(filteredNameObjArr); // testing
        // console.log("clicked"); // testing

        // Filter similar

        // Filter gender

        // Update results
        setResultNameObjArr(filteredNameObjArr);
    }

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