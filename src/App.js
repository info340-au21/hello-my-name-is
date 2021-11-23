import React from 'react';
import './index.css';
import { NameSearchFilter } from './components/NameSearchFilter/NameSearchFilter.js';
import { NameSearchResults } from './components/NameSearchResults.js';
import { LargeNameCard } from './components/LargeNameCard';
import { HeaderBar } from './components/HeaderBar';
import { GenerateHead } from './components/Head';
import { NavIcon } from './components/NavBar';

const nameCard = {name:'Nalu', meaning:"Surging surf, wave", pronunciation:'nah-loo', gender:'neutral', genderIcon:'fa fa-genderless', origin:'Hawaiian'}

function App(props) {
    return (
        <div>
            <NavIcon />
            <GenerateHead />
            <HeaderBar />
            <main>
                {/* Pass user input object */}
                <NameSearchFilter/> 
                {/* Pass names object */}
                <NameSearchResults/>
            </main>
        </div>
    );
}

export default App;