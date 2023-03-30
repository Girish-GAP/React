// import React base library
import React from "react";
// import react library for dom
import ReactDOM from 'react-dom/client'

import App from "./App";

// create a referance of root
const el = document.getElementById('root');

// give control to react
const root = ReactDOM.createRoot(el);


// render components
root.render(
    <App></App>
)