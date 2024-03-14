import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const createPerson = createAsyncThunk(
    "person/createPerson",
    api.createPerson
);
export const updatePerson = createAsyncThunk(
    "person/updatePerson",
    api.updatePerson
);
export const getPerson = createAsyncThunk("person/getPerson", api.getPerson);

const personSlice = createSlice({
    name: "personState",
    initialState: {
        createStatus: false,
        updateStatus: false,
        currentPerson: [],
        currentStatus: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPerson.pending, (state) => {
                state.createStatus = false;
            })
            .addCase(createPerson.fulfilled, (state, action) => {
                //при успешном создании пользователя выводим в консоль инфо о нем, сохраняем его как текущего пользователя, переключаем статус создания пользователя на true
                console.log(`Создан пользователь ${action.payload.email}`);
                state.currentPerson.push(action.payload);
                state.createStatus = true;
            })
            .addCase(updatePerson.pending, (state) => {
                state.updateStatus = false;
            })
            .addCase(updatePerson.fulfilled, (state, action) => {
                state.currentPerson[0].name = action.payload.name;
                state.updateStatus = true;
            })
            .addCase(getPerson.pending, (state) => {
                state.currentStatus = false;
            })
            .addCase(getPerson.fulfilled, (state, action) => {
                state.currentStatus = true;
                state.currentPerson = action.payload;
            });
    },
});

export const regState = (state) => state.personState;
export default personSlice.reducer;
