// get gender from props
// import genderData from './../../data/Genders.json';


// Gender (break down further by gender)
export function GenderFilter(props) {
    let genderStrArr = ["Neutral", "Feminine", "Masculine"]; // hard-coded gender array
    let genderObjArr = props.genders;
    // let genderObjArr = genderData;
    console.log(genderObjArr);

    // let genderElemArr = genderStrArr.map((genderStr) => {
    //     return (
    //         <Gender gender={genderStr} key={genderStr}/>
    //     )
    // })
    let genderElemArr = genderObjArr.map((genderObj) => {
        let {name, colorClass, symbolClass} = genderObj;
        console.log({name});

        return (
            <Gender key={name} gender={name} color={colorClass} symbol={symbolClass} />
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

                <label htmlFor="check-neut">
                    N<span className="gender-text">eutral</span>
                    <i className="fa fa-genderless" aria-label="neutral"></i>
                </label>
            </div>

            <div className="in-line text-fem">
                <input type="checkbox" name="check-fem"/>

                <label htmlFor="check-fem">
                    F<span className="gender-text">eminine</span>
                    <i className="fa fa-venus" aria-label="feminine"></i>
                </label>
            </div>

            <div className="in-line text-masc">
                <input type="checkbox" name="check-masc"/>

                <label htmlFor="check-masc">
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

            <label htmlFor="check-neut">
                {genderFirstLetterStr}<span className="gender-text">{genderOtherLetterStr}</span>
                {/* hard-coded gender class */}
                <i className="fa fa-genderless" aria-label="neutral"></i>
            </label>
        </div>
    )
}