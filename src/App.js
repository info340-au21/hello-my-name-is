import React, { useState } from 'react';
import './index.css';
import { NameSearchFilter } from './components/NameSearchFilter/NameSearchFilter.js';
import { NameSearchResults } from './components/NameSearchResults.js';
import { LargeNameCard } from './components/LargeNameCard';
import { HeaderBar } from './components/HeaderBar';
import { NavIcon } from './components/NavBar';
import { Footer } from './components/Footer';
import { SubmitForm } from './components/SubmitForm.js';
import { Route, Switch, Redirect} from 'react-router-dom';
import { GenerateBookmark } from './components/GenerateBookmark';

// Data
import nameData from './data/Names.json';
import favData from './data/favbookmark.json';
import genderData from './data/Genders.json';
const updateFavData = favData.map(obj => ({...obj, isDelete:false}))
const nameCard = {name:'Nalu', meaning:"Surging surf, wave", pronunciation:'nah-loo', gender:'neutral', genderIcon:'fa fa-genderless', origin:'Hawaiian'}

function App(props) {
    const [bookmarkArray, setbookmarkArray] = useState(favData) //store the array of names to be generated for Bookmark page

    const modifyDelete = (name) => {
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

    // FILTER/SEARCH STATES AND EVENT HANDLING
    // gender filter
    // const [genderIsChecked, setGenderIsChecked] = useState(false);
    // const handleGenderCheck = () => {
    //     setGenderIsChecked(!genderIsChecked); // set it to the opposite of its current state (true/false)
    //     if (genderIsChecked) {
    //         console.log("Is checked");
    //     } else {
    //         console.log("Is not checked");
    //     }
    // }
    const [genderIsChecked, setGenderIsChecked] = useState([]);
    const handleGenderCheck = (event) => {
        console.log(event.target.name);
    }
    
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
                        {/* Pass data states down to NameSearchFilter filters, then lift up and pass down to NameSearchResults */}
                        <NameSearchFilter genders={genderData} callback={handleGenderCheck}/>
                        {/* Should rename results prop to nameObjArr */}
                        <NameSearchResults results={nameData} genderFilter={genderIsChecked} /*addtoFav={addtoFav}*//>
                    </Route>
                    <Route path='/bookmark'>
                        <GenerateBookmark fav={bookmarkArray} handleUpdate={modifyDelete}/>
                    </Route>
                    <Route path='/submit'>
                        <SubmitForm/>
                    </Route>
                    <Route>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </main>
            <Footer/>
            {/* <Footer /> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        </div>
    );
}

export default App;