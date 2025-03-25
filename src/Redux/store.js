import { configureStore } from '@reduxjs/toolkit';
import componentReducer from './ComponentSlice';
import audioReducer from './audioSlice';
import dataReducer from './MyInformation';
import examReducer from './NextSection'; // Переименуйте импорт

const store = configureStore({
  reducer: {
    audio: audioReducer,
    component: componentReducer,
    data: dataReducer,
    exam: examReducer, 
  },
});

export default store;
