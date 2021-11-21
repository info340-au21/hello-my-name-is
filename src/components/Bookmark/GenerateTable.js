import React from 'react';

export function generateTable(props) {
    return (
        <table>
            <generatethead content={contentth}/>

        </table>
    )
}

function eachth(props) {
    return(
        <th>
            {props.content}
        </th>
    )
}

let contentth = ['', 'Name', 'Relavent information'];

function generatethead(props) {
    let contentitem = props.content.map((item) => {
        let cont = <eachth content={item} />;
        return cont;
    })
    return(
        <thead>
            <tr>
                {contentitem}
            </tr>
        </thead>
    )
}
