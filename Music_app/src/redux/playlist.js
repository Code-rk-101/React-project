import { createSlice } from "@reduxjs/toolkit";
import { songsData } from "../../songs";

const PlaylistSlice = createSlice({
    name:"playlist",
    initialState:[],
    reducers:
    {
        addSongs:(state,action)=>
        {
            let exist = state.find((song)=>(song.id === action.payload));
            if(exist)
            {
                return;
            }
            else
            {
                let [a] = songsData.filter((song)=>(song.id === action.payload));
                state.push(a);
            }
        },
        removeSong:(state,action)=>
        {
           let exist = state.find((song)=>(song.id === action.payload));
            if(!exist)
            {
                return;
            }
            else
            {
                return state.filter((song)=>(song.id !== action.payload));
            } 
        }
        
    }
})

export const {addSongs,removeSong} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;


