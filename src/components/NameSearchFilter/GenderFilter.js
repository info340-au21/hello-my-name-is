// Gender (break down further by gender)
export function GenderFilter() {
    return (
        <div className="item center medium-text">
            <div className="in-line text-neut">
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
            </div>
        </div>
    )
}