// import filter option array

export function DetailedFilter(props) {
    return (
        <div className="row">
            <FilterSimilar/>
            <FilterMatching/>
        </div>
    )
}

// Filter htmlFor similar... (break down further into Pronunciation and Meaning)
function FilterSimilar(props) {
    return (
        <div className="item">
            <h3>With similar...</h3>

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
                    <input type="checkbox" name="check-meaning" checked/>

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

// Filter htmlFor matching... (break down further into Origin, Syllables, Length, and FirstLetters)
function FilterMatching(props) {
    // Need to map Origin, Syllables, and Length using Checkbox()
    return (
        <div className="item column">
            <h3>And matching...</h3>
            
            {/* <!-- Origin --> */}
            <div className="item long">
                <input type="checkbox" name="check-origin"/>

                <label htmlFor="check-origin">
                    Origin 
                    <span className="small-text">(Hawaiian)</span>
                </label>
            </div>

            {/* <!-- Syllables --> */}
            <div className="item long">
                <input type="checkbox" name="check-syl"/>

                <label htmlFor="check-syl">
                    Number of syllables 
                    <span className="small-text">(2)</span>
                </label>
            </div>

            {/* <!-- Length --> */}
            <div className="item long">
                <input type="checkbox" name="check-ln"/>

                <label htmlFor="check-ln">
                    Length 
                    <span className="small-text">(4 letters)</span>
                </label>
            </div>

            {/* <!-- First letters (special checkbox) --> */}
            <FirstLettersCheckBox/>
        </div>
    )
}


function Checkbox(props) {
    var {filterStr, isChecked, smallTextStr} = props;

    return (
        <div className="item">
            {/* is checked hard-coded */}
            <input type="checkbox" name="check-pronoun"/>

            <label htmlFor="check-pronoun">
                {filterStr}
                <span className="small-text">{smallTextStr}</span>
            </label>
        </div>
    )
}


function FirstLettersCheckBox(props) {
    var {isChecked, smallTextStr} = props;

    return (
        <div className="item long">
            {/* hard-coded checked */}
            <input type="checkbox" name="check-first"/>

            <label htmlFor="check-first">
                First
                <input type="number" placeholder="3"/>
                letters
                <span className="small-text">{smallTextStr}</span>
            </label>
        </div>
    )   
}