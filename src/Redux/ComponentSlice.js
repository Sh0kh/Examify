// reduxSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentComponent: 'Listening', 
};

const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setComponent(state, action) {
      state.currentComponent = action.payload;
    },
  },
});

export const { setComponent } = componentSlice.actions;
export default componentSlice.reducer;
