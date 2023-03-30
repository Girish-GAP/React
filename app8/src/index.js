// import react base library
import React from 'react'
// import react for dom
import ReactDOM from 'react-dom/client'

import App from './App';
import "./store";


// connecting react to redux
import { store } from './store';
import { Provider } from 'react-redux';


// create refernace 
const el = document.getElementById('root');


// give control to the react
const root = ReactDOM.createRoot(el);


// render components
root.render(
    // Wrap the App component with the provider pass the store to the provider
    <Provider store = {store}>
        <App/>
    </Provider>
);





