import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { BrowserRouter } from 'react-router-dom';
import {initializeApp} from 'firebase/app';
// import { getDatabase } from "firebase/database";
// import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCH_iNjd2w38wIzYiaaieJfee_sMAA20OA",
    authDomain: "hello-my-name-is-a1346.firebaseapp.com",
    databaseURL: "https://hello-my-name-is-a1346-default-rtdb.firebaseio.com",
    projectId: "hello-my-name-is-a1346",
    storageBucket: "hello-my-name-is-a1346.appspot.com",
    messagingSenderId: "982239722808",
    appId: "1:982239722808:web:9f9d320e9af22d258ad5cd",
    measurementId: "G-7TTGC3VJSY"
  };


  
  // Initialize Firebase
  initializeApp(firebaseConfig);
// const nameCard = {name:'Nalu', meaning:"Surging surf, wave", pronunciation:'nah-loo', gender:'neutral', genderIcon:'fa fa-genderless', origin:'Hawaiian'}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));