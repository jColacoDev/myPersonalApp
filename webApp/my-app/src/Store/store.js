import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Theme/themeSlice";
import sunsetReducer from "../Components/Sunset/SunsetSlice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        sunset: sunsetReducer,
    },
});

export default store;
