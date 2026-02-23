import { createSlice } from "@reduxjs/toolkit";
import { songsData } from "../../songs";

const likeSlice = createSlice({
    name:"like",
    initialState:[],
    reducers:
    {
        addSongToLike:(state,action)=>
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
        removeSongFromLike:(state,action)=>
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

export const {addSongToLike,removeSongFromLike} = likeSlice.actions;
export default likeSlice.reducer;