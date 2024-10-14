// redux/ComponentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const componentSlice = createSlice({
  name: 'component',
  initialState: {
    currentComponent: 'LISTENING',
    remainSection: null,
  },
  reducers: {
    setComponent(state, action) {
      state.currentComponent = action.payload;
    },
    setRemainSection(state, action) {
      state.remainSection = action.payload;
    },
  },
});

export const { setComponent, setRemainSection } = componentSlice.actions;
export default componentSlice.reducer;
