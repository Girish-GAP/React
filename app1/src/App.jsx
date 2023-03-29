import { Dashboard } from "./screens/Dashboard";



function App(){
    return( 
    <div>
        YO
    {/* <Dashboard></Dashboard> */}
    {/* <h1>Digital Assignments</h1> */}

        {/* Duplicate element found : make a component */}
        {/* 
        <div>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqpxA9J2rDfYcoX3SfdhmkzXpGMwFviYtPBKGRqc1yC2XEheZpCMXwwL1hWqRM01bbTM&usqp=CAU"/>
            <h3>Alexa</h3>
        </div>
        <div>
            <img/>
            <h3>Alexa</h3>
        </div>

        <div>
            <img/>
            <h3>Alexa</h3>
        </div> */}
    </div>
    )
}

export default App;


// Named Export statements
// use when exporting multiple variables
// Can have as many named exports as we want
// Two ways to write a named exports

// One way :
const message = "Hello this is an default export type1";
export {message};

// 2nd way
export const message2 = "This is the default export type2";