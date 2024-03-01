import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/personSlice";

export const store = configureStore({
    reducer: {
        personState: personSlice,
    },
});
