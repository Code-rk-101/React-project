import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlist";
import likeReducer from "./like";

const store = configureStore({
    reducer: 
    {
        playlist: playlistReducer,
        like: likeReducer,
    },
});

export default store;