import { useState } from "react";

export function GenderFilter(props) {
    let genderObjArr = props.genders;
    
    let genderElemArr = genderObjArr.map((genderObj) => {
        let {genderLabel, colorClass, symbolClass} = genderObj;

        return (
            <Gender key={genderLabel} genderLabel={genderLabel} colorClass={colorClass} symbolClass={symbolClass} />
        )
    })

    return (
        <div className="item center medium-text">
            {genderElemArr}
        </div>
    )
}

function Gender(props) {
    // variables
    let genderStr = props.genderLabel;
    let { genderLabel, colorClass, symbolClass } = props;
    // let isChecked = props.checked; // hard-coded checked

    // check event
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked); // set it to the opposite of its current state (true/false)
        if (isChecked) {
            console.log("Is checked");
        } else {
            console.log("Is not checked");
        }
    }

    // htmlFor label changes; not sure what this is for yet, might be an ID
    let textClass = "in-line " + colorClass;

    // Text changes
    let genderFirstLetterStr = genderStr.charAt(0); // ex: "N"
    let genderOtherLetterStr = genderStr.substr(1, genderStr.length); // ex: "eutral"

    return (
        <div className={textClass}>
            <input onClick={handleCheck} type="checkbox" name={genderLabel}/>

            <label htmlFor={textClass}>
                {genderFirstLetterStr}<span className="gender-text">{genderOtherLetterStr}</span>
                <i className={"fa " + symbolClass} aria-label={genderLabel}></i>
            </label>
        </div>
    )
}