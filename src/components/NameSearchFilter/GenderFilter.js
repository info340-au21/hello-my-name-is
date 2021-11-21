// import gender array

// Gender (break down further by gender)
export function GenderFilter() {
    let genderStrArr = ["Neutral", "Feminine", "Masculine"]; // hard-coded gender array

    let genderElemArr = genderStrArr.map((genderStr) => {
        return (
            <Gender gender={genderStr}/>
        )
    })

    return (
        <div className="item center medium-text">
            {/* Test Gender() */}
            {/* <Gender gender="Neutral"/> */}
            {/* Test genderElemArr */}
            {genderElemArr}

            {/* <div className="in-line text-neut">
                <input type="checkbox" name="check-neut"/>

                <label for="check-neut">
                    N<span className="gender-text">eutral</span>
                    <i className="fa fa-genderless" aria-label="neutral"></i>
                </label>
            </div>

            <div className="in-line text-fem">
                <input type="checkbox" name="check-fem"/>

                <label for="check-fem">
                    F<span className="gender-text">eminine</span>
                    <i className="fa fa-venus" aria-label="feminine"></i>
                </label>
            </div>

            <div className="in-line text-masc">
                <input type="checkbox" name="check-masc"/>

                <label for="check-masc">
                    M<span className="gender-text">asculine</span>
                    <i className="fa fa-mars" aria-label="masculine"></i>
                </label>
            </div> */}
        </div>
    )
}

function Gender(props) {
    let genderStr = props.gender;
    let isChecked = props.checked; // hard-coded checked

    let genderFirstLetterStr = genderStr.charAt(0);
    let genderOtherLetterStr = genderStr.substr(1, genderStr.length);

    return (
        // hard-coded gender class
        <div className="in-line text-neut">
            {/* hard-coded gender class */}
            <input type="checkbox" name="check-neut"/>

            <label for="check-neut">
                {genderFirstLetterStr}<span className="gender-text">{genderOtherLetterStr}</span>
                {/* hard-coded gender class */}
                <i className="fa fa-genderless" aria-label="neutral"></i>
            </label>
        </div>
    )
}