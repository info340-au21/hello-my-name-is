export function GenderFilter(props) {
    let genderObjArr = props.genders;
    
    let genderElemArr = genderObjArr.map((genderObj) => {
        let {genderLabel, colorClass, symbolClass} = genderObj;

        return (
            <Gender key={genderLabel} genderLabel={genderLabel} colorClass={colorClass} symbolClass={symbolClass} callback={props.callback} />
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
    let checkId = "check-" + genderLabel;

    // check event
    // const [isChecked, setIsChecked] = useState(false);
    // const handleCheck = () => {
    //     setIsChecked(!isChecked); // set it to the opposite of its current state (true/false)
    //     if (isChecked) {
    //         console.log("Is checked");
    //     } else {
    //         console.log("Is not checked");
    //     }
    // }


    return (
        <div className={"in-line " + colorClass}>
            <input type="checkbox" id={checkId} name={genderLabel} onClick={props.callback}/>

            <label htmlFor={checkId} className="gender-text">
                {/* Gender text */}
                {genderStr + "  "}
                {/* Gender symbol */}
                <i className={"fa " + symbolClass} aria-label={genderLabel}></i>
            </label>
        </div>
    )
}