import React from 'react';

export function NameSearchFilter() {
    return (
        <div className="section container column">
            <SearchBar/>

            <GenderFilter/>

            <DetailedFilters/>

            <GetNamesButton/>
        </div>
    )
}


// Search
function SearchBar() {
    return (
        <div className="row">
            <h2 className="item center">
                Names like 
                <input type="text" placeholder="NALU" className="search"/>
                :
            </h2>
        </div>
    )
}


// Gender
function GenderFilter() {
    return (
        <div className="row">
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
        </div>
    )
}


// Detailed filters
function DetailedFilters() {
    return (
        <div className="row">
            <FilterSimilar/>

            <FilterMatching/>
        </div>
    )
}


// Filter for similar...
function FilterSimilar() {
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


// Filter for matching...
function FilterMatching() {
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


// Match button
function GetNamesButton() {
    return (
        <div className="row">
            <div className="item">
                <button type="button" className="btn btn-light">Get names</button>
            </div>
        </div>
    )
}