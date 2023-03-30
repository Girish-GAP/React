import './index.css'

// Importing react libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import app component
import App from './App';

// import context
import { Provider } from './context/books';

// get a referenace with id of div
const el = document.getElementById('root');


// give control to thes react
const root = ReactDOM.createRoot(el);

// create components


// render/view components
root.render(
    // only components inside the provider can access the data
    // <BooksContext.Provider value = {5}> 
    //     <App  />    
    // </BooksContext.Provider> 

    <Provider>
        <App/> 
    </Provider>
)


