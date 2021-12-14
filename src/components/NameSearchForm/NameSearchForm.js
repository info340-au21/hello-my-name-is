import React, { useState } from 'react';
import { NameSearchFilter } from './NameSearchFilter';
import { NameSearchResults } from './NameSearchResults';
import { NameNotInDB } from './NameNotInDB'


export function NameSearchForm(props) {
    let {allNameObjArr, genders, booked, handleBook} = props;

    // Get name from search bar
    const [searchedNameObj, setSearchedNameObj] = useState({
        name: "",
        pronunciation: null,
        firstNumLetters: null,
        gender: null,
        meaning: null,
        origin: null
    });

    const [nameInDB, setNameInDB] = useState(true);
    const [searchedName, setSearchedName] = useState(undefined);


    const handleSearch = (event) => {
        let searchedNameStr = event.target.value;
        setSearchedName(searchedNameStr);
        let matchingNameObj = allNameObjArr.find(dbNameObj => dbNameObj.name === searchedNameStr);
        setSearchedNameObj(matchingNameObj);
        
    }

    // Filter based off of name and selected/inputed filters
    const [filterObj, setFilterObj] = useState({
        origin: null,
        length: null,
        firstNumLetters: 0,
        pronunciation: null,
        meaning: null,
        gender: {
            'neutral': false,
            'feminine': false,
            'masculine': false
        }
    })

    // Display results
    const [resultNameObjArr, setResultNameObjArr] = useState(allNameObjArr);

    // When "Get names" is clicked, apply filters to a copy of name dataset
    const handleClickGetNames = () => {
        // Start with all data in database
        let namesInDbArr = allNameObjArr.map((nameObj) => nameObj.name);
        let inDb = namesInDbArr.includes(searchedName);


        if(inDb === true) {
            let filteredNameObjArr = allNameObjArr;

            // Filter matching
            function filterMatchingFn(filterParam, filterFn) {
                if (filterObj[filterParam] !== null) {
                    filteredNameObjArr = filteredNameObjArr.filter(filterFn)
                }
            }

            // By origin
            filterMatchingFn('origin', (dbNameObj) => dbNameObj.origin === searchedNameObj.origin);

            // By name length
            filterMatchingFn('length', (dbNameObj) => dbNameObj.name.length === searchedNameObj.name.length);

            // By first # letters
            let firstNumLetters = filterObj.firstNumLetters;
            let searchedNameFirstLetters = searchedNameObj.name.substring(0, firstNumLetters);
            filterMatchingFn(
                'firstNumLetters',
                (dbNameObj) => dbNameObj.name.substring(0, firstNumLetters) === searchedNameFirstLetters
            );


            // Filter by gender
            filteredNameObjArr = filteredNameObjArr.filter((dbNameObj) => {
                let genderFilter = ['neutral', 'feminine', 'masculine'];
                if (filterObj.gender !== null) {
                    genderFilter = Object.keys(filterObj.gender).filter((genderProp) => filterObj.gender[genderProp]);
                }

                return (
                    genderFilter.includes(dbNameObj.gender)
                )
            })


            // Update results
            setResultNameObjArr(filteredNameObjArr);
            // console.log(filteredNameObjArr); // testing
        } else {
            setNameInDB(false);
        }

        
    }

    if(nameInDB !== true) {
        return (
            <NameNotInDB />
        )
    } else {
        return (
            <div>
                <div className="row">
                    <SearchBar callback={handleSearch}/>
                </div>

                <NameSearchFilter
                     genders={genders}
                     allNameObjArr={allNameObjArr}
                     searchedNameObj={searchedNameObj}
                     filterObj={filterObj}
                     setFilterObj={setFilterObj}
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