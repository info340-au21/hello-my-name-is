export function GenderFilter(props) {
    let genderObjArr = props.genders;
    
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
        <div className="item center medium-text">
            {genderElemArr}
        </div>
    )
}

function Gender(props) {
    let { genderStr, genderLabel, colorClass, symbolClass } = props;
    let checkId = "check-" + genderLabel;

    return (
        <div className={"in-line text-" + colorClass}>
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