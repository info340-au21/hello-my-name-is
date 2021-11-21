import React from 'react';
import './index.css';
import { NameSearchFilter } from './components/NameSearchFilter/NameSearchFilter.js';
import { NameSearchResults } from './components/NameSearchResults.js'

function App(props) {
    return (
        <main>
            <NameSearchFilter/>
            <NameSearchResults/>
        </main>
    );
}

export default App;