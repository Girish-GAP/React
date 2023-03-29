import App from './App';


// 1) Import the React and ReactDOM libraries
// This is the base library // Library that defines what a component is and how multiple components work together
// no './' or '../' means we are importing a package // it will look it in nodemodules by default 
import React from 'react'

// This types of libraris allow you to show components in these different environments // eg. ReactDOM for browser, ReactNative for mobile devices
// Library that knows how to get a component to show up in the browser
import ReactDOM from 'react-dom/client'


// only one function is exported which is default in ./App file so we can give any name to it eg. MyApp
// It will import App function as MyApp
// Default exports can be renamed in the importing file :
// Declare a variable called MyApp
// Find the default export from App.js
// Assign the default export to MyApp variable

// ./ or '../' means we are importing a file that we created
// if ./App has only default export then we can import it by any name 
// here we are importing App name componenent as MyApp
import MyApp from './App';   


/*
    Importing the file : 
    import App from './App.js'
    // Relative path to walk from this file to the file we are importing.
        ./same directory
        ../ up one directory
        ../../ up 2 directory

*/

// additional exports
// Curly braces indicates we want a 'named' export
// Single import statement can get both default + named exports
// Named exports cannot be renamed!!!
// import {message, message2} from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control over that element
const root = ReactDOM.createRoot(el);



// 4) Create a component : 

// Component function
function MyComponent(){

    // We can add logical things here 
    let message = 'Bye there!';
    if(Math.random() > 0.5){
        message = 'Hello there!';
    }

    let fname = 'Girish', lname = "Pawar";

    // this will not be renderd because we are not returning it
    <h4>This is an element!</h4>

    let inputType = 'number';
    let obj = {color : "red"};

    // we must have to return to tell react what we want to render
    // while rendering {} curly braces mean we are about to referenace a JS variable or expression

    // what ever we are writing in jsx syntax will be compiled to the js syntax by babel 
    // eg. <h1>hi</h1> -> React.createElement("h1", null, "HI");       // for more eg. www.babeljs.io
    return(
    <>
        <h1>{message}</h1>

        {/* We can write multiple {} the space will be consider also */}
        <h2>Hii my name is {fname} {lname}</h2>

        {/* We can use logic directly inside {} */}
        <h2>{new Date().toLocaleDateString()}</h2>

        {/* the properties we assigned by the help {} we called them props (properties) */}
        {/* <input type = "number"/> */}
        <input type = {inputType} 
        min = {5}
        list = {[1,2,3]}    // array
        style = { {border : '3px solid red'} } // object- wrap with curly braces
        alt = {message}
        />

        {/* we can not render object */}
        {/* <h1>{obj}</h1>   -> ERROR */  }
        { <h1> name = "Girish" </h1>}
        {/* We can assign object as a prop*/}
        {/* <input abc = {obj}/>   */}

        {/* We can get the code of html in mdn website just search eg. mdn input they will show the types of attribute for that tag */}
        {/* We use that attributes as a props in jsx */}
        {/* The pure html and jsx are slightly different */}

        {/* Steps for converting HTML to JSX */}
        {/* If we get wrong then error suggestion will came in console */}
        {/* 1) All prop names follow camelCase */}
        {/* 2) In JSX, attributes meant to be numbers should be provided as numbers with curly braces */}
        {/* 3) In JSX, boolean 'true' can be written with just the property name. 'False' should be written with curly braces */}
        {/* 4) In JSX, class is used as className for avoid confusion*/}

        {/* <input maxlength = "5" spellcheck = "true"/> */}
        {/* <input maxLength={5} spellCheck = {false}/> */}
        <input maxLength={5} spellCheck/>   {/* it means spellCheck with attribute/prop true */}

        {/* 5) In JSX, in-line styles are provided as objects , nodash for saperation used camel case*/}
        {/* <a style= "text-decoration; 'none'; padding-top : '5px'"/> */}
        <input style={ {textDecoration : 'none', paddingLeft : '10px' } }/>

        <input placeholder='hi there'/>
        <textarea style = { {backgroundColor : 'grey'} }/>
    </>
    )

    // unexpected ways inside {} :
    // the {values} will react will not render or display becuase nothing to display :
    // true, false, undefined, null
    // array = [1,2,3] will be print 123
    // obj = {}   render object will give error eg. <h1>{obj}</h1>  -> ERROR
    // React cannot show object as text content
}   




// console.log(message, message2);
 
// show/render the component on the screen
// while rendering we have to wrap all in one tag, we can use react fragment for this(</>)
root.render(
    <>      
    <div>HELLO...!</div>
    <MyComponent/>
    <MyApp/>
    </>
)

