import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { BrowserRouter } from 'react-router-dom';


// const nameCard = {name:'Nalu', meaning:"Surging surf, wave", pronunciation:'nah-loo', gender:'neutral', genderIcon:'fa fa-genderless', origin:'Hawaiian'}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));