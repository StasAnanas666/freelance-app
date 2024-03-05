import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/personSlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        personState: personSlice,
        orderState: orderSlice,
        userState: userSlice,
    },
});

export default store;
