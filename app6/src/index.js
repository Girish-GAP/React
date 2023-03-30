// Import react base library
import React from 'react'
// Import react library for web
import ReactDOM from 'react-dom/client'

import App from './App';
import './index.css'


// Create refereance to root
const el = document.getElementById('root');


// Give control to react
const root = ReactDOM.createRoot(el);


// render/view component

root.render(
      <App/>
)