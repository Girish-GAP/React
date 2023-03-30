// Import React & ReactDOMLibraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// import app component
import App from './App'

// get a reference of the div with ID root
const el = document.getElementById('root');

// tell react to take control over that element
const root = ReactDOM.createRoot(el);

// create components

// render/show component on the screen 
root.render(<App/>)