import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush} from 'firebase/database'
import names from'../data/Names.json'

export function SubmitForm(props) {
    const [nameInfo, setNameInfo] = useState({})
    const [nameData, setNameData] = useState(names)

    const db = getDatabase();

    useEffect(()=> {
        const exampleRef = ref(db, nameInfo.name);
        const offFunction = onValue(exampleRef, (snapshot) => {
            //console.log(snapshot);
            const newName = snapshot.val();
            // console.log(newName);
            let currentNames = [...nameData, newName];
            console.log(currentNames);
            setNameData(currentNames);
        })

        //turn off listener
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [])

    //add event listener to database updates



    function handleName(event) {
        event.preventDefault();
        const val = {name: event.target.value};
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handleOrigin(event) {
        event.preventDefault();
        const val = {origin: event.target.value};
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handleGender(event) {
        event.preventDefault();
        const val = {gender: event.target.value};
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function handleMeaning(event) {
        event.preventDefault();
        const val = {meaning: event.target.value};
        const currentInfo = Object.assign(nameInfo, val);
        setNameInfo(currentInfo)
    }

    function submitCallback(event) {
        event.preventDefault();
        const nameRef = ref(db, "names");
        firebasePush(nameRef, nameInfo)
        props.applyUpdate(nameInfo);
    }
    

    return (
        <main>
            <form role='form' method='GET'>
                <div className="form-attribute">
                    <label for="name">What name would you like to submit to the data base? </label>
                    <input id="name" onBlur={handleName} type = "text" placeholder="Enter a name" className="search" />
                </div>

                <div className="form-attribute">
                    <label for="origin">What is the origin of this name? </label>
                    <input id="origin" onBlur={handleOrigin} type = "text" placeholder="eg. Greek, Somolian" className="search" />
                </div>

                <div className="form-attribute">
                    <label for="gender">Is it a gendered name? </label>
                    <label for="feminine"><input id="gender" value="feminine" onInput={handleGender} type = "radio" /> Feminine </label>
                    <label for="masculine"><input id="gender" value="masculine" onInput={handleGender} type = "radio" /> Masculine </label>
                    <label for="nuetral"><input id="gender" value="nuetral" onInput={handleGender} type = "radio" /> Neutral </label>
                </div>

                <div className="form-attribute">
                    <label for="meaning">What is the meaning of this name? </label>
                    <input id="meaning" onBlur={handleMeaning} type = "text" placeholder="max 180 characters" />
                </div>

                <div className="item">
                    <button onClick={submitCallback} type="submit" className="btn btn-light">Submit Name!</button>
                </div>
            </form>
        </main>
    )
}