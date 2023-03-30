import { useState } from "react";
import { useReducer } from "react";     // this the hook of react like redux
import { act } from "react-dom/test-utils";


const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE = 'add_value';



// const reducer = (state, action) 

// state : first argument which we refer to as state is going to be whatever the current state of your component.
//          that is being maintained by the reducer.
// action : we usually call it action. the value of that second argument is going to be whatever we passed into dispatch.
//          when you call dispatch, you can pass in no arguments or you can pass in exactly one.
//          - if you pass in more than one argument, all the extras get thrown away and completely ignored.

const reducer = (state, action) =>{
    // Rules around reducer functions : 
    // whatever gets returned will be the new state!
    // If you return nothing, then your state will be undefined!
    // No async/await, no requests, no promises, no outside variables

    // like almost everywhere else in react, don't direcly modify the state object eg. state.count = state.count + 1;
    
    // if(action.type === INCREMENT_COUNT){
    //     return{
    //         ...state, count : state.count + 1
    //     };
    // }

    // if(action.type === SET_VALUE_TO_ADD){
    //     return{
    //         ...state, valueToAdd : state.count + action.payload
    //     }
    // }

    // return state;

    switch(action.type){

        case INCREMENT_COUNT :
                    return{
                ...state, count : state.count + 1
            };

        case SET_VALUE_TO_ADD :
                    return{
                ...state, valueToAdd : action.payload
            };
        
        case DECREMENT_COUNT : 
            return{
                ...state, count : state.count - 1
            }
        
        case ADD_VALUE :
            return{
                ...state, count : state.count + state.valueToAdd, valueToAdd : 0
            }

        default : 
            return state;
            // return new Error('unexpected action type : ' + action.type)
    }

};



function CounterPage(){

    // without useReuducer
    // const [count, setCounter] = useState(0);
    // const [valueToAdd, setValueToAdd] = useState(0)

    // useReducer function explain : 
    // state : like useState variable
    // dispatch : function to change state like setCount etc..
    // json object : intial value for this state (don't need multiple use state we can add multiple states in object)
    // All state for the whole component defined in a single object.
    // we made a state variable as a single object
    // we can access like state.count , state.valueToAdd etc..
    const [state, dispatch] = useReducer(reducer,   // reducer
        {   // object state
            count : 0,
            valueToAdd : 0

        });

    console.log("=>",state.valueToAdd);
 
    const Increment = ()=>{
        // setCounter(count + 1);
        dispatch({
            type : INCREMENT_COUNT
        });
    }

    const Decrement = ()=>{
        // setCounter(count - 1);
        dispatch({
            type : DECREMENT_COUNT
        });
    }

    const handelChange = (event) =>{
        // const value = event.target.value;   // typeof(value) // int
        // const value = parseInt(event.target.value) || 0; // typeof(value)    // number
        // setValueToAdd(value);
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type : SET_VALUE_TO_ADD,
            payload : value
        })
    }

    const handelSubmit = (event)=>{
        event.preventDefault();
        // setCounter(count + valueToAdd);

        dispatch({
            type : ADD_VALUE
        })
    }

    return(
        <div className="m-3">
            <h1 className="text-lg"> Count is : {state.count}</h1>
            
            <div className="flex flex-row">
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>

            <form onSubmit={handelSubmit}>
                <br/>
                <label>Add a lot</label>
                <input type = "number" className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.valueToAdd || ''}
                    onChange = {handelChange}
                />
                <br/><br/>
                <button>Add it</button>
            </form>

        </div>
    )
};


export default CounterPage;