import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push as firebasePush} from 'firebase/database'
import { Redirect } from 'react-router-dom';


export function SubmitForm(props) {
    const [nameInfo, setNameInfo] = useState({})
    const [nameData, setNameData] = useState([])
    const [inDB, setInDB] = useState(undefined)

    const db = getDatabase();

    useEffect(()=> {
        const nameRef = ref(db, "nameData");
        const offFunction = onValue(nameRef, (snapshot) => {
            const newName = snapshot.val();
            let currentNames = [...nameData, newName];
            setNameData(currentNames);
        })
        //turn off listener
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [db])

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

    //const [isInDB, setInDB] = useState(false);

    //loop through, if name in database, redirect to other page
    function submitCallback(event) {
        //event.preventDefault();
        let inDB = false;
        Object.values(nameData[0]).map(name => {
            if(name.name === nameInfo.name) {
                inDB = true;
                return (
                    inDB
                )
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
        return (
            <Redirect to='/inDB' />
        )
    } else {
        return (
            <main>
                <h2 className="center">Submit a name to the database!</h2>

                <form role='form' method='GET'>
                    <div className="form-attribute">
                        <label htmlFor="name">What <strong>name</strong> would you like to submit? </label>
                        <input id="name" onBlur={handleName} type = "text" placeholder="Enter a name" className="search" />
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="pronunciation">How do you <strong>pronounce</strong> this name?</label>
                        <input id="pronunciation" onBlur={handlePronunciation} type="text" placeholder="eg. nah-loo" className="search"></input>
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="origin">What is the <strong>origin</strong> of this name? </label>
                        <input id="origin" onBlur={handleOrigin} type = "text" placeholder="eg. Greek, Somolian" className="search" />
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="gender">Is it a <strong>gendered</strong> name? </label>
                        <label htmlFor="feminine"><input id="feminine" value="feminine" onInput={handleGender} type = "checkbox" /> Feminine </label>
                        <label htmlFor="masculine"><input id="masculine" value="masculine" onInput={handleGender} type = "checkbox" /> Masculine </label>
                        <label htmlFor="neutral"><input id="neutral" value="nuetral" onInput={handleGender} type = "checkbox" /> Neutral </label>
                    </div>
    
                    <div className="form-attribute">
                        <label htmlFor="meaning">What is the <strong>meaning</strong> of this name? </label>
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