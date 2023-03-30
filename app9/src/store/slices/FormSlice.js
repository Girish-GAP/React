import { createSlice } from "@reduxjs/toolkit";

// we are importing another slice reducer to implement reset form logic
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name : 'form',
    initialState : {
        name : '',
        cost : 0
    },
    reducers : {
        changeName(state, action){
            return ({...state, name : action.payload})
        },
        changeCost(state, action){
            return ({...state, cost : action.payload})
        }
    },
    // to rest the form
    extraReducers(builder){
        // builder.addCase('cars/addCar');

        // this function will be combined with the addCar reducer function and create a final reducer for store
        // the following state param represent the state of this form slice state and not an carSlice state..
        builder.addCase(addCar, (state, action) =>{
                state.name = '';
                state.cost = 0;
        });
    }
})


export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;