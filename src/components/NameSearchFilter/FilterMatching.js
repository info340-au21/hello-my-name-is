// Filter for matching... (break down further into Origin, Syllables, Length, and FirstLetters)
export function FilterMatching() {
    return (
        <div className="item column">
            <h3>And matching...</h3>
            
            {/* <!-- Origin --> */}
            <div className="item long">
                <input type="checkbox" name="check-origin"/>

                <label for="check-origin">
                    Origin 
                    <span className="small-text">(Hawaiian)</span>
                </label>
            </div>

            {/* <!-- Syllables --> */}
            <div className="item long">
                <input type="checkbox" name="check-syl"/>

                <label for="check-syl">
                    Number of syllables 
                    <span className="small-text">(2)</span>
                </label>
            </div>

            {/* <!-- Length --> */}
            <div className="item long">
                <input type="checkbox" name="check-ln"/>

                <label for="check-ln">
                    Length 
                    <span className="small-text">(4 letters)</span>
                </label>
            </div>

            {/* <!-- First letters --> */}
            <div className="item long">
                <input type="checkbox" name="check-first"/>

                <label for="check-first">
                    First
                    <input type="number" placeholder="3"/>
                    letters
                    <span className="small-text">("NAL")</span>
                </label>
            </div>
        </div>
    )
}