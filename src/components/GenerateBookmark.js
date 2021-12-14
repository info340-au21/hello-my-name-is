import React from 'react';

export function GenerateBookmark(props) {
    let contentth = ['', 'Name', 'Relavent information'];

    return (
        <div className="bookmarkpage-container">
            <div>
            <table>
                <Generatethead content={contentth} fav={props.fav}/>
                <GenerateRow fav={props.fav} howToHandleUpdate={props.handleUpdate}/>
            </table>
            </div>
        </div>
    )
}

function Generatethead(props) {
    let favNames = props.fav;

    if (favNames.length === 0) {
        return (
            <div className="alert center">
                <h2>Your bookmark page is empty!</h2>
                <button type="submit" className="btn btn-light"><a href='/'>Add a name to your bookmark page!</a></button>
            </div>
        )
    }

    let contentitem = props.content.map((item) => {
        let cont = <Eachth content={item} key={item}/>;
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

    if (Array.isArray(favNames) === false) {
        return <EachRow favData={favNames} update={props.howToHandleUpdate}/>
    } // check if there is only one element in the array

    const newFavArray = favNames.map((favNameObj) => {
        const transformed = <EachRow favData={favNameObj} key={favNameObj.name} update={props.howToHandleUpdate}/>

        return transformed
    })

    return (
        <tbody>
            {newFavArray}
        </tbody>
    )
}

function EachRow(props) {
 
    const img = props.favData.img;
    const text = props.favData.text;
    const name = props.favData.name.charAt(0).toUpperCase()+props.favData.name.slice(1);
    const origin = props.favData.origin.charAt(0).toUpperCase()+props.favData.origin.slice(1)+" name";


    
    const handleDelete = (event) => {
       props.update(props.favData.name)
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
                Origin: {origin}
            </td>
            <td> 
                <button type="button" className="btn like-button" onClick={handleDelete}>
                <span className="material-icons" aria-label="sorting">delete</span>
                </button>
            </td>
        </tr>
    )
}