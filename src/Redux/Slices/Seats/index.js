import { createSlice } from "@reduxjs/toolkit";
import { filterSeatsSettings } from "../../../Utils/filterSettings";
import { Builder } from "./thunks";

export const initialState = {
    filterSettings : JSON.parse(localStorage.getItem('filterSeatsSettings')) ||  filterSeatsSettings,
    seats: [],
    loading: false,
    error: null
}

export const SeatsSlice = createSlice({
    name : 'seats',
    initialState,
    reducers: {
        setFilterSettings : (state, action) => {
            state.filterSettings = action.payload
        }
    },
    extraReducers : Builder
})

export const {setFilterSettings} = SeatsSlice.actions
export default SeatsSlice.reducer