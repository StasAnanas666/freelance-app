import { createSlice } from "@reduxjs/toolkit";


const preloaderSlice = createSlice({
    name: 'preloaderState',
    initialState: {
        loading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

    },
});


export const {setLoading} = preloaderSlice.actions;
export default preloaderSlice.reducer