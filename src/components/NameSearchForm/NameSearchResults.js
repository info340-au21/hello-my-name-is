import React, { useState } from 'react';
import genderData from './../../data/Genders.json';

export function NameSearchResults(props) {
    let {results, booked, handleBook} = props;

    return (
        <div className="section container column">
            <h2 className="row">Your {results.length} match{results.length !== 1 ? "es" : ""}:</h2>
            <p className="row">Click on a card to see more information!</p>
            <NameCards
                results={results}
                booked={booked}
                handleBook={handleBook}
            />
        </div>
    )
}

function NameCards(props) {
    // get name results from filtered search
    let nameResultObjArr = props.results;

    

    // for each name result object, create a name card
    let nameCardElemArr = nameResultObjArr.map((nameResultObj) => {

        return (
            <NameCard
                name={nameResultObj.name}
                gender={nameResultObj.gender}
                pronunciation={nameResultObj.pronunciation}
                meaning={nameResultObj.meaning}
                origin={nameResultObj.origin}
                isLiked={nameResultObj.liked}
                key={nameResultObj.name}
                // allData={props.allData}
                booked={props.booked}
                handleBook={props.handleBook}
             />
        )
    });


    return (
        <div className="container card-container row justify-content-center">
            { nameCardElemArr }
        </div>
    )
}

function NameCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    //const [cardInfo, setcardInfo] = useState([{name:"", gender:"", origin:""}]);
    // const allData = props.allData;

    let nameStr = props.name;
    let meaningStr = props.meaning;

    // get classes based on card gender
    let genderObj = genderData.find((genderObj) => {
        return genderObj.genderStr === props.gender
    })

    let colorClass = "";
    let symbolClass = "";
    if (genderObj !== undefined) {
        colorClass = genderObj.colorClass;
        symbolClass = genderObj.symbolClass;
    }
 
    // console.log(props.gender) // testing
    const handleClick = (event) => {
      setIsLiked(!isLiked);
      props.handleBook(props.name, props.gender, props.origin)
        /*console.log(event.target.name)
        const cardCopy = cardInfo.map((cardArr) => {
            cardArr.name = event.target.name;
            cardArr.gender = event.target.gender;
            cardArr.origin = event.target.origin;
            return cardArr;
        })
        setcardInfo(cardCopy)
        console.log(cardCopy)
        props.addtoFav(cardInfo)
        */
   }

   let heartColor = "grey";
   let heartIcon = "favorite_border";
   if(isLiked) {
       heartColor = "red";
       heartIcon = "favorite";
   }
//    console.log(props.pronunciation)

   function expand(event) {
        //console.log(event.target)
        const card = event.target
        card.classList.toggle('name-expanded');

        // If card is not expanded after toggle, add 'unexpanded' class
        if (!card.classList.contains('name-expanded')) card.classList.toggle('name-unexpanded');
        // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
        else if (card.classList.contains('name-expanded') && card.classList.contains('name-unexpanded')) card.classList.toggle('name-unexpanded');
    }

    return (
        <div className={"card outer " + colorClass} onClick={expand}>
            <div>
                <h3 className="name">
                    <div className="card-container">
                        <div></div>
                        <div>
                            {nameStr + "  "}
                            {/* Hard-coded gender */}
                            <i className={"fa " + symbolClass} aria-label={props.gender}></i>
                        </div>
                        <button type="button" className="btn btn-heart" onClick={handleClick}><span className="material-icons"  style={{color:heartColor}} aria-label="sorting">{heartIcon}</span></button>
                    </div>
                </h3>

                <div className="inner card">
                    <p className="meaning">{meaningStr}</p>
                </div>
            </div>
            <div className="collapsable">
                <div className="row justify-content-center">
                    <div className="card attribute col-sm-12 col-lg-6">
                        <h4>Meaning</h4>
                        <p className="meaning">{props.meaning}</p>
                    </div>
                    <div className="card attribute col-sm-3 col-lg-6">
                        <h4>Origin</h4>
                        <p className="meaning">{props.origin}</p>
                    </div>
                    <div className="card attribute col-sm-3 col-lg-6">
                        <h4>Pronunciation</h4>
                        <p className="meaning">{props.pronunciation}</p>
                    </div>
                    <div className="card attribute col-sm-3 col-lg-6">
                        <h4>Gender</h4>
                        <p className="meaning">{props.gender}</p>
                    </div>
                    <div className="card attribute col-sm-3 col-lg-6">
                        <h4>Length</h4>
                        <p className="meaning">{props.name.length}</p>
                    </div>
                    <div className="card attribute col-sm-3 col-lg-6">
                        <h4>First Letter</h4>
                        <p className="meaning">{props.name.substring(0, 1)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
