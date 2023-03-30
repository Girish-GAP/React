import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";  // for generate random id's



const carSlice = createSlice({
    name : 'cars',
    initialState : {
        searchTerm : '',
        data : [],
        id : ''
    },
    reducers : {
        changeSerchTerm(state, action){
            state.searchTerm = action.payload;
            console.log(state.searchTerm);
        },  

        addCar(state, action){
            // return({...state, cars : [...cars, action.payload]})
            // Assumption : 
            // action.payload === {name : 'ab', cost : 140}

            let id = nanoid();  // to generate random id
            state.data.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : id
            })
        },
        removeCar(state, action){
            // assumption : 
            // action.payload === the id of the car we want to remove
            const updated = state.data.filter((car)=>{
                return car.id !== action.payload
            });
            state.data = updated;
        }
    }
})

export const {changeSerchTerm, addCar, removeCar} = carSlice.actions;
export const carsReducer = carSlice.reducer;
