import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const sunsetSlice = createSlice({
    name: "sunset",
    initialState,
    reducers: {
        setSunset: (state, action) => action.payload,
    },
});

export const { setSunset } = sunsetSlice.actions;

export default sunsetSlice.reducer;
