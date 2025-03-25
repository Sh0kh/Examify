import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NextSection: null,
};

const examSlice = createSlice({
    name: "exam", 
    initialState,
    reducers: {
        setNextSection: (state, action) => {
            state.NextSection = action.payload;
        },
    },
});

export const { setNextSection } = examSlice.actions;
export default examSlice.reducer;
