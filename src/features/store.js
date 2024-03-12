import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/personSlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";
import preloaderSlice from "./slices/preloaderSlice";

const store = configureStore({
    reducer: {
        personState: personSlice,
        orderState: orderSlice,
        userState: userSlice,
        preloaderState: preloaderSlice,
    },
});

export default store;
