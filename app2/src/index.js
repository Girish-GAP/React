// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';


// Get the reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control over that root element
const root = ReactDOM.createRoot(el);


// Create a components


// show/render the component on the screen
root.render(<App/>)