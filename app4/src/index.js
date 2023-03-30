// import react libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// import app component
import App from './App';

// we can test some export function fast temporarly like this : 
// import searchImages from './api';
// searchImages();


// get a refereance of div with id of root
const el = document.getElementById('root');


// give control to the react
const root = ReactDOM.createRoot(el);

// create components 


// render components
root.render(<App/>)