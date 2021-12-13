import { set } from "@firebase/database";
import { useState } from "react";

export function DetailedFilter(props) {
    // let searchedNameStr = props.searchedNameStr;

    return (
        <div className="row">
            <FilterMatching
                // searchedNameStr={searchedNameStr}
                searchedNameObj={props.searchedNameObj}
                nameDataObjArr={props.nameDataObjArr}
            />
            <FilterSimilar/>
        </div>
    )
}

// Filter htmlFor matching... (break down further into Origin, Syllables, Length, and FirstLetters)
function FilterMatching(props) {
    // console.log(props.searchedNameObj); // testing
    let searchedNameObj = props.searchedNameObj;

    const [firstNumLetters, setFirstNumLetters] = useState(0);
    const handleChangeFirstNumLetters = (event) => {
        console.log(event.target.value);
        setFirstNumLetters(event.target.value);
    }

    // Need to map Origin, Syllables, and Length using Checkbox()
    return (
        <div className="item column">
            <h3>With matching...</h3>
            
            {/* <!-- Origin --> */}
            <div className="item long">
                <input type="checkbox" name="check-origin"/>

                <label htmlFor="check-origin">
                    Origin 
                    <span className="small-text">   ({searchedNameObj ? searchedNameObj.origin : ""})</span>
                </label>
            </div>

            {/* <!-- Syllables (hidden for now b/c don't have property for this in db currently) --> */}
            {/* <div className="item long">
                <input type="checkbox" name="check-syl"/>

                <label htmlFor="check-syl">
                    Number of syllables 
                    <span className="small-text">   (2)</span>
                </label>
            </div> */}

            {/* <!-- Length --> */}
            <div className="item long">
                <input type="checkbox" name="check-ln"/>

                <label htmlFor="check-ln">
                    Length 
                    <span className="small-text">   ({searchedNameObj ? searchedNameObj.name.length : ""} letters)</span>
                </label>
            </div>

            {/* <!-- First letters (special checkbox) --> */}
            {/* <FirstLettersCheckBox/> */}
            <div className="item long">
                {/* hard-coded checked */}
                <input type="checkbox" name="check-first"/>

                <label htmlFor="check-first">
                    First
                    <input
                        type="number"
                        placeholder="#"
                        onChange={handleChangeFirstNumLetters}
                    />
                    letters
                    <span className="small-text">
                           ("{searchedNameObj ? searchedNameObj.name.substring(0, firstNumLetters) : ""}")
                    </span>
                </label>
            </div>
        </div>
    )
}

// Filter htmlFor similar... (break down further into Pronunciation and Meaning)
function FilterSimilar(props) {
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