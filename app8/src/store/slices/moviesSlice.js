import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";


const movieSlice = createSlice({
    name : 'movie',
    initialState : [],
    reducers : {
        addMovie(state, action){
            state.push(action.payload);
        },

        removeMovie(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },

        // reset(state, action){
        //     // state = [];  // this is not changing variable this is reassigning value to state.
        //     // whatever we are returned is what new state will be 
        //     // state.songs = [];    // BAD!!    // this state contains only movies array not global state
        //     console.log("hi");
        //     return [];
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
          return [];        // reset all data
        });
      }
})

export const {addMovie, removeMovie} = movieSlice.actions;
// export default movieSlice.reducer;
export const moviesReducer = movieSlice.reducer;