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
    let genderStr = props.genderLabel;
    let { genderLabel, colorClass, symbolClass } = props;
    let isChecked = props.checked; // hard-coded checked

    // htmlFor label changes; not sure what this is for yet, might be an ID
    let htmlForStr = "in-line " + colorClass;

    // Text changes
    let genderFirstLetterStr = genderStr.charAt(0);
    let genderOtherLetterStr = genderStr.substr(1, genderStr.length);

    return (
        // hard-coded gender class
        <div className={"in-line " + colorClass}>
            <input type="checkbox" name={genderLabel}/>

            <label htmlFor={htmlForStr}>
                {genderFirstLetterStr}<span className="gender-text">{genderOtherLetterStr}</span>
                <i className={"fa " + symbolClass} aria-label={genderLabel}></i>
            </label>
        </div>
    )
}