import React, { useState } from 'react';

export function NameSearchFilter(props) {
    let {searchedNameObj, allDataObjArr, genders, filterObj, setFilterObj} = props;

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
                <GenderFilter
                    genders={genders}
                    callback={handleCheckGender}
                />

                <FilterMatching
                    searchedNameObj={searchedNameObj}
                    allDataObjArr={allDataObjArr}
                    handleCheckOrigin={handleCheckOrigin}
                    handleCheckLength={handleCheckLength}
                    handleCheckFirst={handleCheckFirst}
                    handleChangeFirstNumLetters={handleChangeFirstNumLetters}
                    firstNumLetters={firstNumLetters}
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

function GenderFilter(props) {
    let genderObjArr = props.genders;

    function Gender(props) {
        let { genderStr, genderLabel, colorClass, symbolClass } = props;
        let checkId = "check-" + genderLabel;
    
        return (
            <div className={"item long text-" + colorClass}>
                <input type="checkbox" id={checkId} name={genderStr} onClick={props.callback} /*checked="true"*//>
    
                <label htmlFor={checkId} className="gender-text">
                    {/* Gender text */}
                    {genderLabel + "  "}
                    {/* Gender symbol */}
                    <i className={"fa " + symbolClass} aria-label={genderLabel}></i>
                </label>
            </div>
        )
    }
    
    let genderElemArr = genderObjArr.map((genderObj) => {
        let {genderStr, genderLabel, colorClass, symbolClass} = genderObj;

        return (
            <Gender
                key={genderLabel}
                genderStr={genderStr}
                genderLabel={genderLabel}
                colorClass={colorClass}
                symbolClass={symbolClass}
                callback={props.callback}
            />
        )
    })

    return (
        <div className="item column">
            {/* <h3>That are...</h3> */}
            {genderElemArr}
        </div>
    )
}