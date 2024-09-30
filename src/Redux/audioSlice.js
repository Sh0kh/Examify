import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
    name: 'audio',
    initialState: { isPlaying: false },
    reducers: {
        playAudio: (state) => {
            state.isPlaying = true;
        },
        stopAudio: (state) => {
            state.isPlaying = false;
        },
    },
});

export const { playAudio, stopAudio } = audioSlice.actions;
export default audioSlice.reducer;
