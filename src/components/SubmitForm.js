import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush} from 'firebase/database'
import { NameInDB } from './NameInDB';


export function SubmitForm(props) {
    const [nameInfo, setNameInfo] = useState({})
    const [nameData, setNameData] = useState([])
    const [inDB, setInDB] = useState(undefined)

    const db = getDatabase();
    // console.log(db);

    useEffect(()=> {
        const nameRef = ref(db, "nameData");
        const offFunction = onValue(nameRef, (snapshot) => {
            //console.log(snapshot);
            const newName = snapshot.val();
            // console.log(newName);
            let currentNames = [...nameData, newName];
            // console.log(currentNames);
            setNameData(currentNames);
        })

        console.log(nameRef);

        //turn off listener
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [])

    //add event listener to database updates


    function handleName(event) {
        event.preventDefault();
        const name = event.target.value
        let val;
        if(name.length < 0) {
            val = {name: undefined}
        } else {
            val = {name: name.toLowerCase()};
        }
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handlePronunciation(event) {
        event.preventDefault();
        const pronunciation = event.target.value
        let val;
        if(pronunciation.length < 0) {
            val = {pronunciation: undefined}
        } else {
            val = {pronunciation: pronunciation.toLowerCase()};
        }
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handleOrigin(event) {
        event.preventDefault();
        const origin = event.target.value
        let val;
        if(origin.length < 0) {
            val = {origin: undefined}
        } else {
            val = {origin: origin.toLowerCase()};
        }
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handleGender(event) {
        event.preventDefault();
        const gender = event.target.value
        console.log(gender)
        const val = {gender: gender.toLowerCase()};
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handleMeaning(event) {
        event.preventDefault();
        const meaning = event.target.value
        let val;
        if(meaning.length < 0) {
            val = {meaning: undefined}
        } else {
            val = {meaning: meaning.toLowerCase()};
        }
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    //loop through, if name in database, redirect to other page
    function submitCallback(event) {
        //event.preventDefault();
        let inDB = false;
        Object.values(nameData[0]).map(name => {
            if(name.name === nameInfo.name) {
                inDB = true;
            }
        })
        if(inDB === false) {
            const nameRef = ref(db, "nameData");
            firebasePush(nameRef, nameInfo);
            //props.applyUpdate(nameInfo);
        } else {
            setInDB(true);
        }
        //console.log(Object.values(nameData[0]))
       
    }
    

    if(inDB === true) {
        return(
            <NameInDB />
        )
    } else {
        return (
            <main>
                <form role='form' method='GET'>
                    <div className="form-attribute">
                        <label htmlFor="name">What name would you like to submit to the data base? </label>
                        <input id="name" onBlur={handleName} type = "text" placeholder="Enter a name" className="search" />
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="pronunciation">How do you pronounce this name?</label>
                        <input id="pronunciation" onBlur={handlePronunciation} type="text" placeholder="eg. nah-loo" className="search"></input>
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="origin">What is the origin of this name? </label>
                        <input id="origin" onBlur={handleOrigin} type = "text" placeholder="eg. Greek, Somolian" className="search" />
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="gender">Is it a gendered name? </label>
                        <label htmlFor="feminine"><input id="gender" value="feminine" onInput={handleGender} type = "checkbox" /> Feminine </label>
                        <label htmlFor="masculine"><input id="gender" value="masculine" onInput={handleGender} type = "checkbox" /> Masculine </label>
                        <label htmlFor="nuetral"><input id="gender" value="nuetral" onInput={handleGender} type = "checkbox" /> Neutral </label>
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="meaning">What is the meaning of this name? </label>
                        <input id="meaning" onBlur={handleMeaning} type = "text" placeholder="max 180 characters" />
                    </div>
    
                    <div className="item">
                        <button onClick={submitCallback} type="submit" className="btn btn-light">Submit Name!</button>
                    </div>
                </form>
            </main>
        )
    }
}