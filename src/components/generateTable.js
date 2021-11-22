import React from 'react';

export function GenerateTable(props) {
    let contentth = ['', 'Name', 'Relavent information'];

    return (
        <table>
            <Generatethead content={contentth}/>
            <GenerateRow />
        </table>
    )
}

function Eachth(props) {
    return(
        <th>
            {props.content}
        </th>
    )
}

function Generatethead(props) {
    let contentitem = props.content.map((item) => {
        let cont = <Eachth content={item} />;
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

function GenerateRow(props){
    return (
        <tbody>
            <EachRow img={'../public/yellow.jpg'} text={'img for female'} name={'Emma'} origin={'Germanic name'}/>
            <EachRow img={'../public/pink.jpg'} text={'img for male'} name={'Jacob'} origin={'Hebrew name'}/>
            <EachRow img={'../public/green.jpg'} text={'img for gender neutral'} name={'Jessie'} origin={'English name'}/>
            <EachRow img={'../public/yellow.jpg'} text={'img for female'} name={'Gracie'} origin={'English name'}/>
        </tbody>
    )
}

function EachRow(props) {
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


