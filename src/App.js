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
import { Route, Switch, Redirect} from 'react-router-dom';

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
                        {/* Pass names object */}
                        <NameSearchResults/>
                    </Route>
                    <Route path='/bookmark'>
                        <BookmarkPage/>
                    </Route>
                    <Route path='/submit'>
                        <SubmitForm/>
                    </Route>
                    <Route>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;