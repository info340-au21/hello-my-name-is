import React from 'react';
import { NameSearchFilter } from './NameSearchFilter/NameSearchFilter';
import { NameSearchResults } from './NameSearchResults';

export function NameSearchForm(props) {
    return (
        <div>
            <NameSearchFilter
                genders={props.genders}
                callback={props.callback} 
                // genderFilter={props.genderFilter}
            />
            
            <NameSearchResults results={props.results} allData={props.allData} booked={props.booked} handleBook={props.handleBook}/>
        </div>
    )
}