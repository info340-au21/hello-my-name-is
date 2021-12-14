import React, { useState } from 'react';

export function NameSearchFilter(props) {
    let {searchedNameObj, allDataObjArr, genders, filterObj, setFilterObj} = props;

    const handleCheckGender = (event) => {
        // update gender filter object
        let genderFilter = event.target.name;
        let newGenderFilterObj = filterObj.gender;
        newGenderFilterObj[genderFilter] = event.target.checked;

        // add gender filter object to filter object's gender prop
        let newFilterObj = filterObj;
        newFilterObj.gender = newGenderFilterObj;
        setFilterObj(newFilterObj)

        // console.log(newFilterObj); // testing
    }

    // origin filter
    const [originIsChecked, setOriginIsChecked] = useState(false);
    const handleCheckOrigin = () => {
        let newFilterObj = filterObj;
        
        if (newFilterObj.origin === null) {
            newFilterObj.origin = searchedNameObj.origin;
            // setOriginIsChecked(true);
        } else {
            newFilterObj.origin = null;
            // setOriginIsChecked(false);
        }

        setFilterObj(newFilterObj);
        setOriginIsChecked(!originIsChecked)
        // console.log(filterObj); // testing
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
        // console.log(filterObj); // testing
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
        // console.log(filterObj); // testing
    }

    return (
        <div className="section container filter column">
            <div className="filter-row">
                <GenderFilter
                    genders={genders}
                    callback={handleCheckGender}
                    filterObj={filterObj}
                />
            </div>

            <div className="filter-row">
                <FilterMatching
                    searchedNameObj={searchedNameObj}
                    allDataObjArr={allDataObjArr}
                    handleCheckOrigin={handleCheckOrigin}
                    handleCheckLength={handleCheckLength}
                    handleCheckFirst={handleCheckFirst}
                    handleChangeFirstNumLetters={handleChangeFirstNumLetters}
                    firstNumLetters={firstNumLetters}
                    // filterObj={filterObj}
                    originIsChecked={originIsChecked}
                />
            </div>
        </div>
    )
}

function GenderFilter(props) {
    let genderObjArr = props.genders;

    function Gender(props) {
        let {
            genderStr,
            genderLabel,
            colorClass,
            symbolClass,
            // filterObj
        } = props;
        let checkId = "check-" + genderLabel;
        // console.log(checkId); // testing
    
        return (
            <div className={"filter-item text-" + colorClass}>
                <input
                    type="checkbox"
                    id={checkId}
                    name={genderStr}
                    onClick={props.callback}
                    // checked={filterObj.gender[genderStr]}
                />
    
                <label htmlFor={checkId}>
                    {/* Gender text */}
                    <span className="gender-text">{genderLabel + "  "}</span>
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
        <div className="filter">
            {genderElemArr}
        </div>
    )
}

// Filter htmlFor matching... (break down further into Origin, Syllables, Length, and FirstLetters)
function FilterMatching(props) {
    let {
        searchedNameObj,
        handleCheckOrigin,
        handleCheckLength,
        handleCheckFirst,
        handleChangeFirstNumLetters,
        firstNumLetters,
        // filterObj
        originIsChecked
    } = props;

    // let originIsChecked = filterObj.origin !== null;

    // Need to map Origin, Syllables, and Length using Checkbox()
    return (
        <div className="item column">
            <h3>With matching...</h3>
            
            <div className="filter">
                {/* <!-- Origin --> */}
                <div className="filter-item">
                    <input
                        type="checkbox"
                        id="check-origin"
                        onChange={handleCheckOrigin}
                        checked={originIsChecked}
                    />

                    <label htmlFor="check-origin">
                        Origin 
                        <span className="small-text">   ({searchedNameObj ? searchedNameObj.origin : ""})</span>
                    </label>
                </div>

                {/* <!-- Length --> */}
                <div className="filter-item">
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
                <div className="filter-item">
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
        </div>
    )
}