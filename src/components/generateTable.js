import React from 'react';

export function generateTable(props) {
    return (
        <table>
            <generatethead content={contentth}/>
            <generateRow />
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

function generateRow(props){
    return (
        <tbody>
            <eachRow img={'../public/yellow.jpg'} text={'img for female'} name={'Emma'} origin={'Germanic name'}/>
            <eachRow img={'../public/pink.jpg'} text={'img for male'} name={'Jacob'} origin={'Hebrew name'}/>
            <eachRow img={'../public/green.jpg'} text={'img for gender neutral'} name={'Jessie'} origin={'English name'}/>
            <eachRow img={'../public/yellow.jpg'} text={'img for female'} name={'Gracie'} origin={'English name'}/>
        </tbody>
    )
}

function eachRow(props) {
    const img = props.img;
    const text = props.text;
    const name = props.name;
    const origin = props.origin;

    return(
        <tr>
            <td>
                <img src={img} alt={text}/>
            </td>
            <td>
                {name}
            </td>
            <td>
                Origin:{origin}
            </td>
            <td>
                <button type="button" class="btn btn-heart"><span class="material-icons" aria-label="sorting">favorite_border</span></button>
            </td>
            <td>
                <span class="material-icons" aria-label="sorting">delete</span>
            </td>
        </tr>
    )
}


