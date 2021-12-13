import React, { useState } from 'react';
import { GenderFilter } from './GenderFilter';
// import { DetailedFilter } from './DetailedFilter';

export function NameSearchFilter(props) {
    let {searchedNameObj, nameDataObjArr, genders, callback, filterObj, setFilterObj} = props;

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
    const [firstNumLetters, setFirstNumLetters] = useState(0);
    const handleChangeFirstNumLetters = (event) => {
        setFirstNumLetters(event.target.value);
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

    return (
        <div className="section container column">
            <div className="row">
                <FilterMatching
                    searchedNameObj={searchedNameObj}
                    nameDataObjArr={nameDataObjArr}
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
                    callback={callback}
                />
            </div>
        </div>
    )
}

// Filter htmlFor matching... (break down further into Origin, Syllables, Length, and FirstLetters)
function FilterMatching(props) {
    let {searchedNameObj, handleCheckOrigin, handleCheckLength, handleCheckFirst, handleChangeFirstNumLetters, firstNumLetters} = props;

    // const [firstNumLetters, setFirstNumLetters] = useState(0);
    // const handleChangeFirstNumLetters = (event) => {
    //     setFirstNumLetters(event.target.value);
    // }

    // Need to map Origin, Syllables, and Length using Checkbox()
    return (
        <div className="item column">
            <h3>With matching...</h3>
            
            {/* <!-- Origin --> */}
            <div className="item long">
                <input
                    type="checkbox"
                    name="check-origin"
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
                    name="check-ln"
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
                    name="check-first"
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
                    <input type="checkbox" name="check-pronoun"/>

                    <label htmlFor="check-pronoun">
                        Pronunciation
                    </label>
                </div>
            </div>

            {/* <!-- Meaning --> */}
            <div className="row column">
                {/* Meaning checkbox (use Checkbox()) */}
                <div className="item">
                    <input type="checkbox" name="check-meaning"/>

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