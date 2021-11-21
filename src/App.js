import React from 'react';
import './index.css';
import { HeaderBar } from './components/HeaderBar';
import { LargeNameCard } from './components/LargeNameCard';
import { SubmitForm } from './components/SubmitForm';

// const name = {'name': 'Nalu', 'pronunciation':'nah-loo', 'origin':'Hawaiian', 'gender':'neutral', 'meaning':'Surging surf, wave'}

function App(props) {
    return (
        <div>
            <HeaderBar />
            {/* <LargeNameCard name={name} /> */}
        </div>
    );
}

export default App;