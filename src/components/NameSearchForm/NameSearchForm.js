import React, { useState } from 'react';
import { NameSearchFilter } from './NameSearchFilter/NameSearchFilter';
import { NameSearchResults } from './NameSearchResults';

export function NameSearchForm(props) {
    // Result names
    // const [resultNameObjArr, setResultNameObjArr] = useState([]);
    // // When "Get names" is clicked, apply filters to a copy of name dataset
    // const handleClickGetNames = () => {
        
    // }

    return (
        <div>
            <NameSearchFilter
                genders={props.genders}
                callback={props.callback}
                nameDataObjArr={props.nameDataObjArr}
            />

            {/* Then trigger update results */}
            <div className="row">
                <GetNamesButton/>
            </div>
            
            <NameSearchResults
                results={props.results}
                allData={props.allData}
                booked={props.booked}
                handleBook={props.handleBook}
            />
        </div>
    )
}

// Match button
function GetNamesButton() {
    return (
        <div className="item">
            <button type="button" className="btn btn-light">Get names</button>
        </div>
    )
}