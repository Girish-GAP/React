import Dashboard from "./Dashboard";



function App(){
    return( 
    <div>
        App
        <Dashboard></Dashboard>
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