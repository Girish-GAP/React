// do all the code by self index.js, app.js etc..


// DRAW DIGRAMS TO KNOW UNDERSTAND HOW PROPS FLOWS


/*

// JSX CHEET SHEET
https://jsx-notes.vercel.app/

// When we make a reusable component :
// image/text/data is different but the general structural or layout is same.
// Any time inside of a React project you see different elements that look just about identical, that's usually a sign
// that you're going to be able to create a reusable component and reuse that component. like card etc...

// Creating a Component : 

    1) Create a new file.
      - (By convention) File should start with a capital letter
      eg. App.js
    
    2) Make your component. Should be a function that return JSX.
        eg. function App(){return <h1>Hii</h1>}

    3) Export the component at the bottom of the file
        export default App;

    4) Import the component into another file
        import App from './App';

    5) Use the component
        <App />




    // Component Hierarchy :
    // It helps us understand the replationship between our different components



    // PROPS 

    - parent component -> props -> Child component
    - Props System :
        - Pass data from a parent to a child
        - Allows a parent to configure each child differently
            (show different text, different styles, etc..)
        - one way flow of data, child can't push props back up
        - Like 25% of understanding React
    
    // Steps to use props :
    1) Add attributes to a JSX element
    2) React collects the attributes and puts them in an object
    3) Props objects shows up as the first arguments to the child component function.
    4) We use the props however we wish

    // Common mistakes while dealing with props :
    // while dealing with the props the name should be same with destructuring other wise don't show any error or rendering.
    // to avoid that after passing the props consolelog it so mispelled props will show as undefined.

    // CSS Library :
    // when we make use of css library, we are kind of entering into a little bit of contract that if we use the
    // same class as library then we will get the look of that property without effords
    // Css Library
    // write custom css

    // buma for css

    // after install any package its added in node_modules

    // to add the custome css just make an import app.css in app.js
    //////////

    // Event System  : Detect a user clicking the button, dragging in element, typing, etc..
                      // when want to run some code when user done something.
    // State System : Update content on screen
                      // when want to change what is displayed on the screen

    ///////////////////

    - list of events : 
        https://reactjs.org/docs/events.html 

    - typically most used mouse events are :
        1) onClick = A user clicks on something
        2) onChange = A user types in a text input

    // USING EVENTS : STEPS
        1) Decide what kind of event you want to watch for
        2) Create a function.
            - usually called an event handler or callback function
        3) Name the function using pattern of handle + EventName as per community convention.
        4) Pass the function as a prop to a plain element
        5) Make sure you pass the function using a valid event name.
            ('onClick', 'onMouseOver', etc)
        6) Make sure you pass a reference to the function
            - *don't call it means don't write parenthesis() !!!


        // State :
        - data that changes over time.
        - Data that changes as the user interacts with our app
        - When this data changes, React will update content on the screen automatically
        - This is the one-and-only way we can change what content React shows
        - Even other libs that appear to update content use the state system behind the scenes


        // Steps to use 'useState' :
        1) Define a piece of state with the useState function
        2) Give a value to the useState funciton. This is the 
            default, starting value for our piece of state
        3) Use the state in some way in our component (often in the returned JSx)
        4) When user does something, update the piece of state. Causes React to rerender the component.

    */


    
/*
    // NEW PROJECT : PICS(60) : how components work to gether


    // API CALL :
    - React has no tools, objects, function for making HTTP requests
    - React only cares about showing content and hadling user events.
    - This is good so we can can write a lot of business logic + data fetching without worrying about React

    // HOW https works : 62

    // Used unplash for api 

    // As React itself has no funtions/tools for making http requests
    // to make requests, we commonly use either Axious or Fetch
    // in this course we are going to use Axious. it is easier to get started with..
    // npm install axios


    // async : 

    it's wait to execute the code which uses the async 
    Eg. 
    const search = async () => {
        const respo = await axious.get('https://api/photos');
        
        // before executing the following line js knows have to wait
        // so this line will execute after the api call promise complete
        // with async we have to tell wait with await keyword
        console.log(respo); 
    }


    // To understand the application see how data flows through component's

    // how does data flow through a React app ?\
        - Where do we do data fetching?
        - Where do we difine state?
        - How do we share info between components?

    // Component Communication : 
        - Sibling component cannot directly communicate
        - To share info betwen sibling components, we have to involve the parent.
        - Use props to communicate from parent down to child


        // child to parent commincation : not good but if we want ?
            - Upward communication : 
            - props is only for parent to child communication is not super accurate.
            - 1) Take  it like a normal event 
            - 2) Pass an event handler down
            - 3) Call handler when something intresting happens    onSubmit();

        // Submit form on enter click
        // when we use form element inside input element then after click on enter the browser automatically
            tringger the sumbit event

        // don't try to get value out of an input using a query selector (or similar)

        // The way React handels form elements (text input, checboxes, redio buttons, etc is a little weird)
        // Handeling text inputs in react :
        1) Create a new piece of state
        2) Create an event handler to watch for the 'onChange' event
        3) when the 'onChange' event fires, get the value from the input
        4) Take that value from the input and use it to update your state
        5) pass your state to the input as the value prop


        // when we are taking something as a prop and we have to pass that further as prop :
        // we make a state of what ever we are reciving we store it in prop and as prop from that store.


        // WHEN YOU UPDATE STATE, the component and alll of its children are rerendered.

        // Why we need key while mapping :
        // we applay a 'key' to each element during the mapping step.
        // after that react do :
            // after re-rendering, compare the keys on each ImageShow to the keys from the previous render.
            // applay minimal set of changes to existing DOM elements.

        // NOTES ON KEYS :
            - Use whenever we have a list of elements (so every time we do a 'map')
            - Add the key to the top-most JSX element in the list
            - Must be a string or number
            - Should be unique for this list
            - should be consistent acress rerenders

            // Almost all lists we ever create will be built by mapping over an anrray of objects fetched from a database.
            // These objets will have a unique 'id' This is the perfect key to use.
            // If Don't have an ID :
                // use the index of the record eg. i in for. but this may lead to bugs as you update the list
            // Generate a unique ID yourself :
                //
 */      



/*
    // React Application 4 : Book Application

    // How to decide the state should be where ?
    - First draw component hirarchy :
    1) State updated makes rerender the component it is defined in and all that component children
    2) Find all the components that need to use this state.
    3) Define the state in the lowest common parent

    // update the array and object in state :
        - array.push will not work because of its internal working : becuase this action works on same location, modifies the same array
            // memory and react rerenders only added to the new memory block
        - to avoid that we have to create a new array
        - copy all the elements from old array
        - add new element to end of new array
        - [...existing array, new element]
        - now its pointing to new memory block it will rerender

    // we don't need to do this in case of string, boolean, number and undefined because react treat them differently

    // Adding element in middle of slice :
        - colors = [red, green, blue]
            - colors.slice(0,1)     // starting from index 0 but exclusing 1
            - colors.slice(1)     // starting from index 1 to the end of array inclusing 1

    // Filter function :
    // If fileter function returns true, the value is added to the new array.
    // if function returns false, value is not added.
    // FKT : Filter keeps true


    // Map :
        // modifying object based on property :
        // obj = [ {id : 1, title : book1}, {id : 2, title : book2}]
        // we have to change id : 2 index title to new book ?
        ->  obj.map((book, i)=>{
            if(id == i){
                return {...book, title : newTitle}; // {id : 2, title : book2, title : newTitle}    // but as per object unique key is it will overwrite 
            }           // {id : 2, title newTitle}
        })

    // use strict comparisam in filter and map !== or ==== 

    

    // Collapsing two handeles in one // so onSubmit tow function will call

    // we are using picsum.photos


    ///// ADD SERVER TO THE PROJECT ///////////

    // JSON server :  Open so urce project for development + learning
    // add actual command in script of pacakge.json as server
    // make db.json repleca of our database
    // make api i api.http


    // Reminder : we do not make request using React directly :
    // React is only concerned with showing content on the screen.
    // we make featch or axious to make api call in react


    // Hook useEffect : 
     // function that we import form React
    // Used to run code when a component is initially rendered and (sometimes) when it is rerendered
        useEffect(()=>{
        featchBooks();      // firest argument is a function that contains code we want to run
    },
    []) // second is an array or nothing - this controls wheter the function is executed on renders

        - How our react app renderd : 
            - Initial render : 
              - Component called
              - JSX returned
              - DOM updated
             State updated 
             - Second time render
                // same
             and so on...

       //  useEffect : - function passed to use effect always call     : first render.
                    - function passed to use effect maybe called!   : Second render
        
        // Three variations of useEffect :
        1) second argument is [] : called after first render and never called again.
        2) second argumet is - (nothing) : called after first render, also called after every render
        3) second argument is [counter] : called after first render, also called after renders if 'counter' variables changed.
        
        
        // tricky things of useEffect : 
            1) Understanding when our arrow function gets called
            2) Understanding the arrow function's return value
            3) Understanding stale variable references

        

        // CONTEXT : 

        // context is not a replacement for props
        // context is not a replacement for redux
        // An alternative to props is context we don't need to drill props we can get them from center data location

        // Using context :
            1) Create the context // (const BookContext = createContext())
            2) Specify the data that will be shared  // wrap the components with providers so the inside renderd component can access
            3) 'Consume' the data in a component
            

        //  Component that we make tells thr provider what data to share


        // Application state : Data that is used by many different components.
        // Component state : Data that is used by very few components.
        // These terms are a way to figure out how to best design your state.



        //// Hooks : Function that add additional features to a component.
        some Eg. : 
        useState : Allows a component to use the state system.
        useEffect : Allows a component to run code at specific points in time
        useContext : Allows a component to access values stored in context


        /// Custome Hooks : 
            - Functions we write to make reusable bits of logic
            - Usually reuse basic hooks like 'useState', 'useEffect', etc..
            - can do a lot or very little
*/



// 150 : NEW APP : app6 : compsS

/*

    // In big applications there are same properties of buttons all over the application.
    // so we make the component for that button and engineers uses that component for the entire application.
    // we can make buttons different by passing props to that component for different purposes.
    // we can pass the text which we want to show as button from props
    // we can also pass the props from <button> HERE </button> also, jsx property we can access that prop by name 'children'

    // Prop-types : npmjs.com/package/prop-types docs
        - Optional
        - JS library to validate the props that get passed into your component.
        - If someone passes down the incorrect kind of value (number instead of boolean), a warning will appear in console.
        - Used to be very popular. now typescript does almost the same thing (and more)

    // in js : 
        - number(true) : 1
        - Number(undefined) : NaN
        - Number(!!undefined) : 0
        - !!undefined : false
        - Number(false) : 0

    // Tailwind css : tailwindcss.com/docs/guides/create-react-app
        - Tailwind releases new version extreamly frequently
        - All the styling we are going to use in unlikey to change
        - Setup direction might chnage by the time you watch this
        - to use it : 1) follow doc  2) at last add index.css in index.js
        
        // Steps to use tailwind css : 
        1) Decide on a new styling rule you want to add 
        2) Go to the tailwindcss.com/docs
        3) smash control+k 
        4) search for styling rule
        5) add appropriate class name to your elements. eg className='bg-red-500'

        // classnames :
            - optional 
            - JS library for building up a 'className' string based on different values
            - Library is called 'classnames' but prop is 'classname'

        // React icons library : react-icons.github.io/react-icons

        // How to add the click event handlers eg. onClick, onMouseOver etc.. to the custome <Button/>
            1) not best way : pass prop handel click function through <Button/> and then call it from plain button but 
                if we have to use multiple event handelers then we have pass more props..
            2) best way : pass them as rest...  so we can use them like regular props of button

        /// Orgnizing the project : 

        // Components : Reausable React components that shows a handful of elements.
                        eg. Button, ItemShow, ProductList, Dropdown, SearchBar, CheckBox
        // Pages : Still a React component. not intrested to be reused.
                   eg. CheckoutPage, ProductPage, LoginPage, LandingPage, RentalPage, CartPage etc..

        - orgnizing the project by type : components in saperate file and pages in saperate file.
        - orgnizing the project by feature : files of feature name and that pertictular componets and pages in it.
                                - eg. : chekcout -> checkoutButton.js, checkoutpage.js
        - Hybrid 

        // File/Folder orgnization : 
            - do not worry about this too much 
            - 99% of professional projects - a senior engineer is going to decide for you.
            - On any large project, you will end up using search to find files, rather than manual navigation.
            - Having a bunch of files in a folder is not inherently bad

        // Accordion : click and it will exapand in bottom


        // Design process : lecture 176
            // User sees something on the screen change : we probably need state to implement this step.
            // User commited some action : we probably need an event handler to implement this.

        // Event handlerr should be ussually be defined in same component as state it modifies.
        // Reminder : React dosen't prints booleans, nulls, undefined..

        // JS boolean expressions : 
        // || gives back the first value that is truthy
        // && gives backthe first falsey value or the last truthy value

        ////////// 

        // When an event occures, browser wants to find event hadlers to call
        // Order in which this search occurs is divided into three phases..
            - Capture phase 
                - Go to most parent of clicked element. see if it has handler. Go to second most parent.. etc.
                - Do you have a click event handler? if so i will call it..
            - Target phase
                - Go to the clicked element, check to see if it has event handler
            - Bubble phase
                - Go the parent of clicked element, see it has handler, then go to parent's parent.. etc.

        
            //// useRef : 
            - Allows a component to get a reference to a DOM element that it creates.
            - 95% of the time used with DOM elements, but can hold a reference to any value.


            ////////////////////////...........//////////////////

            /// NAVIGATION :
            
            // Standard browser behavior : 
                - When the browser loads a new HTML documnet, all existing js variables and code is dumped.
                - dosen't really matter for a traditional HTML-foucused app.
                - kind of bad for a react app

            // Address bar will dictate what content we show 
            // we only care about the 'path' part of the url

            // window.location.pathname gives the current browser path

            // automatically signout after some time is an programmatic navigation, automatically navigate the use from code.

            // routes : 225

            // Population navigation libraries : 
            // React-Router (most popular) https://reactrouter.com/en/main
            // Wouter
            // React-Location
            // Reach-Router

        // REMEMBER : key in js can not have special symbol and dash unless you wrap the key in string ''.

*/



/*
    // appreact7 :

    // useReducer : 
        - Alternate to useState
        - Produces state
        - Changing this state makes a component rerender
        - Useful when you have several different closely-related pieces of state
        - Useful when future state values depend on the current state.

        - useState : Each piece of state defined as a separate variable. // like for count, changeToValue etc..
        - useReducer : All state for the whole component defined in a single object...
    
        
        // State update with useReducer :
            - dispatch : function we get back from calling 'useReducer'
            - pass the value to dispatch 
            - That dispatch function is how we trigger a state update.
            - So any time we need to update our state, anytime we need to get our component to re render 
              when we are using use reducer, we are going to call dispatch.
            - when we call dispatch, React is going to go and find that reducer function that we defined at the top of file.
            - react knows this function exists bcs we have passed that function as a first argumnet to the useReducer.
        
            // when we call 'dispatch', we need to pass along some info to tell the reducer how the state should be updated. // Billion ways to do this !
            // The React community has come up with a convention on how to tell the reducer what it needs to do.
            // When we need to modify state, we will dispatch and always pass in an 'action'
            // the 'action' object will always have a 'type; that is a string.
            // this helps tell the reduce what update it needs to make.
            // if we need to communicatte some data to the it will be placed on the 'payload' property of object
            // this is very commin community convention not a requirement. React dosen't treat action object any differently.

            // to avoid misspelling we use constants 
            // the 'ALL_CAPS' is another community convention, tells other engineer that this is an action type.


            
            // Usually makes more sense to stuff logic into the redcuer and keep the dispatches simple.
            // less duplicated code if you need to dispatch the same action in multiple places
            // part of the goal of reducers is to have a very specific set of ways that state can be changed
            
            // In redux there will be more options to use it 
                1) classical redux
                2) redux toolkit

            // REDUX :

            // What is redux : Redux is a library for managing state using the same techniques as useReducer.
            // almost same as useReducer : it has a actions -> dispatch functions -> reducers -> state
            // useReducer : all of our state was created + maintained in the React world.
            // Redux : with redux, we create a 'store' to create + maintain our state
            // Individual components can connect to the store and access state. 

            // React-Redux : library to help communication between the react and redux sides of your project.
                - Redux store [ Dispatch function -> Reducer -> State]  <--- React-redux  ---> App
 

            // the store is an object that will hold all of our state
            // we usually do not have to interact with it directly. The 'React-Redux' library will handel the store for us

            // Slice :
                1) Defines some intial state
                2) Combines 'mini-reducers' into a big reducer
                3) Creates a set of 'action creator' functions

                2) : Sliece are what saves us from having to write out all this boilerplate like :
                      - Action -> reducer -> switch -> code to run
                
                3) Action creators : set of functions created for us automatically.
                    // when called, they return an action that we can dispatch 
                    // saves us from having to manually write out action objects.


            // React-Redux : saperate library from redux is a totally different library called specifally react redux.
            // this library is all about making redux and react play together nicely.
            // Key part is Provider : its an component it creates the same kind of provider that we have seen before around the context system.
            // we pass this provider in our redux store to it

            //  CONNECTING REACT TO REDUX : (once per project)
            1) Export the 'store' from whatever file it is created in
            2) Import the store into the root 'index.js' file
            3) Import 'Provider' from the 'redux-redux' library
            4) Wrap the App component with the provider pass the store to the provider


            // CHANGING STATE : many times per project
            1) Add a reducer to one of your slice that changes state in some perticular way
            2) Export the action creator that the slice automatically creates
            3) Find the component that you want to dispatch from
            4) Import the action creator function and 'useDispatch; from react-redux
            5) Call the 'useDispatch' hook to get access to 
            6) when the user does something, call the action creator to get an action, then dipatch it..

            // ACCESSING STATE : many times per project
            1) Find the component that needs to access some state.
            2) import the 'useSelector' hook from 'react-redux'
            3) call the hook, passing in a selector function
            4) use the state! anytime state changes, the component will automatically rerender.


            // Confusing things :
                - Reducers in a slice only 'see' their own part of the overall state object.
                    - it's just plain array of strings : {songs : ['newsong']}
                    - In a reducer, 'state' means 'the state I'm in control of'
                - Everywhere else, 'state means 'the whole state object in the store'
 
 
            // Redux and Redux Toolkit are the two different libraries :
            // Redux Tool kit is the wrapper around redux library.
 
 


            ///////  REDUX-TOOLKIT : 

            // npm install @reduxjs/toolkit 
            // npm i react-redux

            // Redux Store Design : 
                1) Identify what state exists in the app
                2) Identify how that state changes over time
                3) Group together common pieces of state
                4) Create slice for each group

            // Redux toolkit is going to automatically make one of those different action creator functions.
            // so we will get some kind of action types defined automatically for each of these diffent kinds of changes.


            // REDUX-TOOLKIT :

            // create folder structure : 
                - slices 
                - index.js

            // create slice : 
                - inside slice 
                    - import create-slice from @reduxjs/toolkit
                    - create slice variable and assign createSlice function
                    - inside function pass json arguments :
                        - name : name of slice
                        - initial state : represent the interface of that slice store
                        - reducers json 
                            - contains logic functions takes two arguments : state, action
                            - return or assign the current state of store we want 
                    - export the reducer functions which we want to use from slicevar.actions
                    - export reducerName from slicevar.reducer not reducers

            // index.js
                - import configure store from toolkit
                - import reducers and reducerfunctions from all slices
                - create store variable and assign configure variable function 
                - inside configurestore function pass json argument : 
                    - reducer json // going to dictate what the general shape of our state looks like inside the store
                        - property names : reducer names
                            eg. cars : carsReducer
                        
                - export store with all imported action creator funcitons so we don't need to import them directly from slices

            // inside root index.js file : 
                - import privider from react-redux and store which we created
                - wrap app component with that provider 
                - and pass the store prop to provider 

            
        // To use it follow : CHANGING STATE , ACCESSING STATE


        // in application userAPi is done using the asyncThunk 
        // albumsApi , PhotosApi is done using the redux tool kit  
 
*/


/*
    Options for Data Featching in redux toolkit :
    - Async thunk functions : we will use this to handle users.
    - Redux Toolkit Query  we will use this to handele photos and vide

    - Do not make requests in reducers : 
        - reducers should always be 100% synchronous
        - reducers should only operate on their argumnets - no outside variables.
       
    - Query : read the data from server
    - Mutation : change data that is stored on the server

    /// CREATING A RTK QUERY API :
        1) Identify a group of related requests that your app needs to make.
        2) Make a new file that will create the api.
        3) The api needs to store a ton of state related to data, request status, errors. add a 'reducerPath'
        4) The API needs to know how and where to send requests. Add a 'baseQuery' 
        5) Add 'endpoints', one for each kind of request you want to make. Reqs that read data are queries,
            write data are mutations
        6) Export all of the automatically generated hooks
        7) Connect the API to the store. reducer, middleware, and listners
        8) export the hooks from the store/index.js file
        9) Use the generated hooks in a component!












*/


















/*

git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/Girish-GAP/React.git
git push -u origin master
*/