// Filter for similar... (break down further into Pronunciation and Meaning)
export function FilterSimilar() {
    return (
        <div className="item">
            <h3>With similar...</h3>

            {/* <!-- Pronunciation --> */}
            <div className="row">
                <div className="item">
                    <input type="checkbox" name="check-pronoun"/>

                    <label for="check-pronoun">
                        Pronunciation
                    </label>
                </div>

            </div>

            {/* <!-- Meaning --> */}
            <div className="row column">
                <div className="item">
                    <input type="checkbox" name="check-meaning" checked/>

                    <label for="check-meaning" >
                        Meaning
                    </label>
                </div>

                <div className="item">
                    <div className="center">
                        <label for="slide-meaning" className="small-text">Loose match</label>

                        <input type="range" name="slide-meaning" min="1" max="3" list="similarity"/>

                        <datalist>
                            <option value="1" label="Loose match"></option>
                            <option value="2"></option>
                            <option value="3" label="Close match"></option>
                        </datalist>

                        <label for="slide-meaning" className="small-text">Close match</label>
                    </div>
                </div>
            </div>
        </div>
    )
}