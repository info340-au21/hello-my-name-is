import React, { useState } from 'react';

export function GenerateTable(props) {
    let contentth = ['', 'Name', 'Relavent information'];

    return (
        <table>
            <Generatethead content={contentth}/>
            <GenerateRow fav={props.fav}/>
        </table>
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

function Eachth(props) {
    return (
        <th>
            {props.content}
        </th>
    )
}

function GenerateRow(props){
    let favNames = props.fav;

    const newFavArray = favNames.map((favNameObj) => {
        const transformed = <EachRow favData={favNameObj} key={favNameObj.name}/>

        return transformed
    })

    return (
        <tbody>
            {newFavArray}
        </tbody>
    )
}

function EachRow(props) {
    const [isLiked, setIsLiked] = useState(false);

    const img = props.favData.img;
    const text = props.favData.text;
    const name = props.favData.name;
    const origin = props.favData.origin;

    let heartColor = "grey";
    let heartIcon = "favorite_border";
    if(isLiked) {
        heartColor = "red";
        heartIcon = "favorite";
    }

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
                <button type="button" className="btn like-button">
                    <span className="material-icons" style={{color:heartColor}} aria-label="sorting">{heartIcon}</span>
                </button>
            </td>
            <td>
                <span className="material-icons" aria-label="sorting">delete</span>
            </td>
        </tr>
    )
}


