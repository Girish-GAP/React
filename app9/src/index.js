import 'bulma/css/bulma.css'
import './styles.css'

// import base and dom library
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import { store } from './store';

// create a reference
const el = document.getElementById('root');

// give control to react
const root = ReactDOM.createRoot(el);

// render view
root.render(
    <Provider store = {store}>
        <App/>
    </Provider>
)