// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import componentReducer from './ComponentSlice';
import audioReducer from './audioSlice'; 

const store = configureStore({
  reducer: {
    audio: audioReducer,
    component: componentReducer, 
  },
});

export default store;
