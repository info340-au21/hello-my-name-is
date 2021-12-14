import React, { useState } from 'react';
import { NameSearchFilter } from './NameSearchFilter';
import { NameSearchResults } from './NameSearchResults';
import { NameNotInDB } from './NameNotInDB'
import { NameInDB } from '../NameInDB';


export function NameSearchForm(props) {
    let {allNameObjArr, genders, booked, handleBook} = props;

    // Get name from search bar
    const [searchedNameObj, setSearchedNameObj] = useState({
        name: "",
        pronunciation: "",
        firstNumLetters: "",
        gender: "",
        meaning: "",
        origin: ""
    });

    const [nameInDB, setNameInDB] = useState(true);
    const [searchedName, setSearchedName] = useState(undefined);


    const handleSearch = (event) => {
        let searchedNameStr = (event.target.value).toLowerCase();
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
            'neutral': null,
            'feminine': null,
            'masculine': null
        }
    })

    // Display results
    const [resultNameObjArr, setResultNameObjArr] = useState(allNameObjArr);

    // When "Get names" is clicked, apply filters to a copy of name dataset
    const handleClickGetNames = () => {
        // Start with all data in database
        let namesInDbArr = allNameObjArr.map((nameObj) => nameObj.name);
        let inDb = namesInDbArr.includes(searchedName);

        let filteredNameObjArr = allNameObjArr;
        //console.log(filteredNameObjArr)

        if(inDb === true) {

            // Filter matching
            function filterMatchingFn(filterParam, filterFn) {
                if (filterObj[filterParam] !== null) {
                    filteredNameObjArr = filteredNameObjArr.filter(filterFn)
                }
            }

            // By origin
            filterMatchingFn('origin', (dbNameObj) => dbNameObj.origin === searchedNameObj.origin);
            //console.log(filteredNameObjArr); 

            // By name length
            filterMatchingFn('length', (dbNameObj) => dbNameObj.name.length === searchedNameObj.length);
            //console.log(filteredNameObjArr); 

            // By first # letters
            let firstNumLetters = filterObj.firstNumLetters;
            let searchedNameFirstLetters = searchedName.substring(0, firstNumLetters);
            filterMatchingFn(
                'firstNumLetters',
                (dbNameObj) => dbNameObj.name.substring(0, firstNumLetters) === searchedNameFirstLetters
            );
            console.log(filteredNameObjArr); 

            // Filter by gender (only if some of the boxes are checked, not if all or none are checked)
            let genderProp = filterObj.gender;
            if (!(genderProp.masculine === null && genderProp.feminine === null && genderProp.neutral === null)) {
                filteredNameObjArr = filteredNameObjArr.filter((dbNameObj) => {
                    let genderFilterArr = ['neutral', 'feminine', 'masculine'];

                    // get an array of the acceptable genders by checking each of the filter object's genders to see if any are true
                    genderFilterArr = genderFilterArr.filter((gender) => filterObj.gender[gender] === true);
                    console.log(genderFilterArr);

                return (
                    genderFilter.includes(dbNameObj.gender)
                )
            })
            setResultNameObjArr(filteredNameObjArr);

            // Update results
        } else {
            setNameInDB(false);
        }
        //console.log(filteredNameObjArr);

        
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
                onBlur={props.callback}
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