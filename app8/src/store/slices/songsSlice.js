import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name : 'song',
    initialState : [],
    reducers : {
        // mini reducer functions : like switch cases 

        // 'song' + '/' + 'addSong' = 'song/addSong'
        addSong(state, action){
            // state is not the big state object in the store
            // it is the piece of state managed by this reducer
            state.push(action.payload)
        },
        // 'song' + '/' + 'removeSong' = 'song/removeSong'
        removeSong(state, action){
            // action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },

    // extra reducers : if we want some update in other slice also
    extraReducers(builder){
       
        // builder.addCase('movie/reset', (state, action)=>{
        //     return [];
        // })

        builder.addCase( reset, (state, action)=>{
            return [];      // reset all data
        })
    }
});


export const {removeSong, addSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
