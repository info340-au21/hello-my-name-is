import React, { useState } from 'react';
import { GenderFilter } from './GenderFilter';
// import { DetailedFilter } from './DetailedFilter';

export function NameSearchFilter(props) {
    let {searchedNameObj, allDataObjArr, genders, filterObj, setFilterObj} = props;

    // handleCheckFn (doesn't work)
    // function makeHandleCheckFn(filterParam, newFilterVal) {
    //     return (
    //         (event) => {
    //             let newFilterObj = filterObj;
                
    //             if (event.target.checked) {
    //                 newFilterObj[filterParam] = newFilterVal;
    //             } else {
    //                 newFilterObj[filterParam] = null;
    //             }

    //             setFilterObj(newFilterObj);
    //             console.log(filterObj);
    //         }
    //     )
    // }

    // origin filter
    const handleCheckOrigin = (event) => {
        let newFilterObj = filterObj;
        
        if (event.target.checked) {
            newFilterObj.origin = searchedNameObj.origin;
        } else {
            newFilterObj.origin = null;
        }

        setFilterObj(newFilterObj);
        console.log(filterObj);
    }

    // length filter
    const handleCheckLength = (event) => {
        let newFilterObj = filterObj;

        if (event.target.checked) {
            newFilterObj.length = searchedNameObj.name.length;
        } else {
            newFilterObj.length = null;
        }

        setFilterObj(newFilterObj);
        console.log(filterObj);
    }

    // first # letters filter
    const [firstNumLetters, setFirstNumLetters] = useState("");
    const handleChangeFirstNumLetters = (event) => {
        let firstLettersString = event.target.value;

        setFirstNumLetters(firstLettersString);

        let newFilterObj = filterObj;
        newFilterObj.firstNumLetters = firstLettersString;
        setFilterObj(newFilterObj)
    }
    const handleCheckFirst = (event) => {
        let newFilterObj = filterObj;

        if (event.target.checked) {
            newFilterObj.firstNumLetters = firstNumLetters;
        } else {
            newFilterObj.firstNumLetters = null;
        }

        setFilterObj(newFilterObj);
        console.log(filterObj);
    }

    // pronunciation filter

    // meaning filter

    // gender filter
    const [genderFilterObj, setGenderFilterArr] = useState({
        'neutral': false,
        'feminine': false,
        'masculine': false
    })
    const handleCheckGender = (event) => {
        let genderFilter = event.target.name;
        let newGenderFilterObj = genderFilterObj;

        newGenderFilterObj[genderFilter] = event.target.checked;

        setGenderFilterArr(newGenderFilterObj);

        let newFilterObj = filterObj;
        newFilterObj.gender = genderFilterObj;
        setFilterObj(newFilterObj)

        console.log(genderFilterObj);
    }

    return (
        <div className="section container column">
            <div className="row">
                <FilterMatching
                    searchedNameObj={searchedNameObj}
                    allDataObjArr={allDataObjArr}
                    handleCheckOrigin={handleCheckOrigin}
                    handleCheckLength={handleCheckLength}
                    handleCheckFirst={handleCheckFirst}
                    handleChangeFirstNumLetters={handleChangeFirstNumLetters}
                    firstNumLetters={firstNumLetters}
                />
                <FilterSimilar/>
            </div>

            <div className="row">
                <h3 className="center">That are...</h3>
                <GenderFilter
                    genders={genders}
                    callback={handleCheckGender}
                />
            </div>
        </div>
    )
}

// Filter htmlFor matching... (break down further into Origin, Syllables, Length, and FirstLetters)
function FilterMatching(props) {
    let {searchedNameObj, handleCheckOrigin, handleCheckLength, handleCheckFirst, handleChangeFirstNumLetters, firstNumLetters} = props;

    // Need to map Origin, Syllables, and Length using Checkbox()
    return (
        <div className="item column">
            <h3>With matching...</h3>
            
            {/* <!-- Origin --> */}
            <div className="item long">
                <input
                    type="checkbox"
                    id="check-origin"
                    onClick={handleCheckOrigin}
                />

                <label htmlFor="check-origin">
                    Origin 
                    <span className="small-text">   ({searchedNameObj ? searchedNameObj.origin : ""})</span>
                </label>
            </div>

            {/* <!-- Length --> */}
            <div className="item long">
                <input
                    type="checkbox"
                    id="check-ln"
                    onChange={handleCheckLength}
                />

                <label htmlFor="check-ln">
                    Length 
                    <span className="small-text">   ({searchedNameObj ? searchedNameObj.name.length : ""} letters)</span>
                </label>
            </div>

            {/* <!-- First letters (special checkbox) --> */}
            <div className="item long">
                {/* hard-coded checked */}
                <input
                    type="checkbox"
                    id="check-first"
                    onChange={handleCheckFirst}
                />

                <label htmlFor="check-first">
                    First
                    <input
                        type="number"
                        placeholder="#"
                        onChange={handleChangeFirstNumLetters}
                    />
                    letters
                    <span className="small-text">   ("{searchedNameObj ? searchedNameObj.name.substring(0, firstNumLetters) : ""}")</span>
                </label>
            </div>
        </div>
    )
}

// Filter htmlFor similar... (break down further into Pronunciation and Meaning)
function FilterSimilar(props) {
    function MeaningSlider() {
        return (
            <div className="item">
                <div className="center">
                    <label htmlFor="slide-meaning" className="small-text">Loose match</label>
    
                    <input type="range" name="slide-meaning" min="1" max="3" list="similarity"/>
    
                    <datalist>
                        <option value="1" label="Loose match"></option>
                        <option value="2"></option>
                        <option value="3" label="Close match"></option>
                    </datalist>
    
                    <label htmlFor="slide-meaning" className="small-text">Close match</label>
                </div>
            </div>
        )
    }

    return (
        <div className="item">
            <h3>And similar...</h3>

            {/* <!-- Pronunciation checkbox (use Checkbox()) --> */}
            <div className="row">
                <div className="item">
                    <input type="checkbox" id="check-pronoun"/>

                    <label htmlFor="check-pronoun">
                        Pronunciation
                    </label>
                </div>
            </div>

            {/* <!-- Meaning --> */}
            <div className="row column">
                {/* Meaning checkbox (use Checkbox()) */}
                <div className="item">
                    <input type="checkbox" id="check-meaning"/>

                    <label htmlFor="check-meaning" >
                        Meaning
                    </label>
                </div>

                {/* Meaning slider */}
                <MeaningSlider/>
            </div>
        </div>
    )
}