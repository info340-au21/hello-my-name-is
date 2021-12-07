import React from 'react';
import './index.css';
import { NameSearchFilter } from './components/NameSearchFilter/NameSearchFilter.js';
import { NameSearchResults } from './components/NameSearchResults.js';
import { LargeNameCard } from './components/LargeNameCard';
import { HeaderBar } from './components/HeaderBar';
import { NavIcon } from './components/NavBar';
import { Footer } from './components/Footer';
import { BookmarkPage } from './Bookmark.js';
import { SubmitForm } from './components/SubmitForm.js';
import { Route, Switch, Redirect, Link} from 'react-router-dom';

// Data
import nameData from './data/Names.json';

const nameCard = {name:'Nalu', meaning:"Surging surf, wave", pronunciation:'nah-loo', gender:'neutral', genderIcon:'fa fa-genderless', origin:'Hawaiian'}

function App(props) {
    return (
        <div>
            <NavIcon />
            <HeaderBar />
            <main>
                <Switch>
                    <Route exact path='/'>
                        {/* Pass user input object */}
                        <NameSearchFilter/> 
                        {/* Pass names object array (right now just test data, not user input) */}
                        <NameSearchResults results={nameData}/>
                    </Route>
                    <Route path="/LargeNameCard/:name">
                        <LargeNameCard />
                        <div><Link to="/" className="btn btn-primary mb-3">Back</Link></div>
                    </Route>
                    <Route path='/bookmark'>
                        <BookmarkPage/>
                    </Route>
                    <Route path='/submit'>
                        <SubmitForm applyUpdate={updateDatabase}/>
                    </Route>
                    <Route>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </main>
            {/* <Footer /> */}
        </div>
    );

    function updateDatabase(nameInfo) {
        console.log(nameInfo);
        const form = document.querySelector("form");
        form.reset();
    }
}

export default App;