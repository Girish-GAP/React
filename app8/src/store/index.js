import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// how to call the dispatch method
// console.log(songsSlice.actions.addSong("YOO"));

// the store is an object that will hold all of our state
// we usually do not have to interact with it directly. The 'React-Redux' library will
// handel the store for us
const store = configureStore({

    reducer : {
        // this reducer wraps up all the indivisual reducer function we wrap up in songSlice
        // state managed by songsSlice
        // songs : songsSlice.reducer,  // this object determines what keys our 'big' state object has
       // state managed by movieSlice
        // movies : movieSlice.reducer

        songs : songsReducer,
        movies : moviesReducer
    }
});



export {store}; // not a default export bcs eventually we are going to add more functions

// Export the action creator that the slice automatically creates
// export const {removeSong, addSong} = songsSlice.actions;
// export const {addMovie, removeMovie, reset} = movieSlice.actions;
// console.log(movieSlice.actions.reset.toString());        // movie/slice


export {addSong, removeSong, addMovie, removeMovie, reset};





// console.log(songsSlice.actions);

//  to see is manually what state exists in the store :  store.getState()
// const startingState = store.getState();
// // console.log(JSON.stringify(startingState)); 

// store.dispatch({
//     type : 'song/addSong',
//     payload : 'new song !!!'
// });

// // do it manually we we can do by : store.dispatch({type : 'song/addsong'});
// const finalState = store.getState();
// console.log(JSON.stringify(finalState));