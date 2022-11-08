import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Theme/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;
