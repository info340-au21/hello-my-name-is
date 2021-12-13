import React, { useState, useEffect } from 'react';
import './index.css';
import { NameSearchForm } from './components/NameSearchForm/NameSearchForm';
import { LargeNameCard } from './components/LargeNameCard';
import { HeaderBar } from './components/HeaderBar';
import { NavIcon } from './components/NavBar';
import { Footer } from './components/Footer'
import { SubmitForm } from './components/SubmitForm.js';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { GenerateBookmark } from './components/GenerateBookmark';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue, get, child } from 'firebase/database';
import { NameNotInDB } from './components/NameSearchForm/NameNotInDB'

// Data
import testNameData from './data/Names.json';
import genderData from './data/Genders.json';
// const nameCard = {name:'Nalu', meaning:"Surging surf, wave", pronunciation:'nah-loo', gender:'neutral', genderIcon:'fa fa-genderless', origin:'Hawaiian'}

function App(props) {
    const [bookmarkArray, setbookmarkArray] = useState([]) //store the array of names to be generated for Bookmark page
    const [nameDataArray, setNameData] = useState([])
    // console.log(nameDataArray); // testing

    const db = getDatabase();
    // const currentData = ref(db, nameData);
    // console.log(currentData);

    useEffect(() => {
        const dataref = ref(db, "nameData");
        const offFucntion1 = onValue(dataref, (snapshot) => {
            const allDataValue = snapshot.val();
            const keysArray = Object.keys(allDataValue)
            const array1 = keysArray.map((datakey) => {
                const nameCopy = {...allDataValue[datakey], firebaseKey: datakey};
                return nameCopy;
            })
            setNameData(array1);
        })

        const bookmarkref = ref(db, "userData");
        const offFucntion2 = onValue(bookmarkref, (snapshot) => {
            const userDataValue = snapshot.val();
            if(userDataValue === null) {return null}
            const keysArray = Object.keys(userDataValue)
            const array2 = keysArray.map((favkey) => {
                const nameCopy = {...userDataValue[favkey], firebaseKey: favkey};
                return nameCopy;
            })
            setbookmarkArray(array2);
        })

        function cleanup() {
            offFucntion1();
            offFucntion2();
        }
        return cleanup
    }, []);

    //const updateFavData = bookmarkArray.map(obj => ({...obj, isDelete:false}))
    /*
    const modifyDelete = (name) => { //handle delete
        let update = updateFavData.map((theCard) => {
            let updateCopy = {...theCard}
            if(theCard.name === name) {
                theCard.isDelete = true
            }
            return updateCopy
        })
        let whatLeftAfterDelete = update.filter((name) => !name.isDelete);
        setbookmarkArray(whatLeftAfterDelete) //generate the filtered array, enable user to delete any bookmarked names
    }
    */
    const modifyDelete = (name) => { //handle delete
        let remainsOfDelete = bookmarkArray.filter((userObj) => userObj.name !== name);
        const bookmarkref = ref(db, "userData");
        firebaseSet(bookmarkref, remainsOfDelete)
    }

    const AddtoFav = (name, gender, origin) => {
        let img = "";
        let text = "";
        let newOrigin = "";
        if (origin === undefined) {
            origin = newOrigin;
        }
        if (gender.toLowerCase() === "feminine") {
            img = "/img/yellow.jpg";
            text = "img for female"
        } else if (gender.toLowerCase() === "masculine") {
            img = "/img/pink.jpg";
            text = "img for male"
        } else {
            img = "/img/green.jpg"
            text = "img for neutral"
        }
        const newFavObj = {
            img: img,
            text: text,
            name: name,
            origin: origin
        }

        const bookRef = ref(db, "userData")
        if (bookmarkArray.filter(e => e.name === newFavObj.name).length === 0) {
            firebasePush(bookRef, newFavObj)
        }
    }

    // console.log(bookmarkArray)
    
    // const handleGenderCheck = (event) => {
    //     // get gender
    //     let genderStr = event.target.name;

    //     // create new object
    //     let newObj = genderFilterObjArr;

    //     // toggle the proper gender
    //     newObj[genderStr] = !newObj[genderStr];

    //     setGenderFilterObjArr(newObj);
    //     // console.log(genderFilterObjArr); // testing
    // }
    
    /*
    const addtoFav = (name, gender, origin) => {
        const img = "";
        const text = "";
        if (gender == "Female") {
            img = "/img/yellow.jpg";
            text = "img for female"
        } else if (gender == "Male") {
            img = "/img/pink.jpg";
            text = "img for male"
        } else {
            img = "/img/green.jpg"
            text = "img for neutral"
        }
        const newFavObj = {
            name:name,
            img:img,
            text:text,
            origin:origin
        }
        const newbookmarkArray = [...bookmarkArray, newFavObj];
        setbookmarkArray(newbookmarkArray);
    }
    */
    return (
        <div>
            <NavIcon />
            <HeaderBar />

            <main>
                <Switch>
                    <Route exact path='/'>
                        <NameSearchForm
                            genders={genderData}
                            allNameObjArr={testNameData}
                            // allNameObjArr={nameDataArray}
                            booked={bookmarkArray}
                            handleBook={AddtoFav}
                        />
                    </Route>
                    {/* <Route path="/LargeNameCard/:name">
                        <LargeNameCard />
                        <div><Link to="/" className="btn btn-primary mb-3">Back</Link></div>
                    </Route> */}
                    <Route path='/bookmark'>
                        <GenerateBookmark fav={bookmarkArray} handleUpdate={modifyDelete} />
                    </Route>
                    <Route path='/submit'>
                        <SubmitForm />
                    </Route>
                    <Route>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </main>
            <Footer/>
            {/* <Footer /> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        </div>
    );

    //change this to display page when name is already in the database
}

export default App;