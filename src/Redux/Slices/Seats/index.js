import { createSlice } from "@reduxjs/toolkit";
import { filterSeatsSettings } from "../../../Utils/filterSettings";
import { Builder } from "./thunks";

export const initialState = {
    filterSettings : JSON.parse(localStorage.getItem('filterSeatsSettings')) ||  filterSeatsSettings,
    seats: [],
    loading: false,
    currentSeats : JSON.parse(localStorage.getItem('currentSeats')) || [],
    error: null
}

export const SeatsSlice = createSlice({
    name : 'seats',
    initialState,
    reducers: {
        setFilterSettings : (state, action) => {
            state.filterSettings = action.payload
        },
        setCurrentSeats : (state, action) => {
            state.currentSeats = action.payload
            localStorage.setItem('currentSeats', JSON.stringify(state.currentSeats))
        }
    },
    extraReducers : Builder
})

export const {setFilterSettings, setCurrentSeats} = SeatsSlice.actions
export default SeatsSlice.reducer