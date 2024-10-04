// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import componentReducer from './ComponentSlice';
import audioReducer from './audioSlice'; 
import dataReducer from './MyInformation'

const store = configureStore({
  reducer: {
    audio: audioReducer,
    component: componentReducer, 
    data:dataReducer
  },
});

export default store;
