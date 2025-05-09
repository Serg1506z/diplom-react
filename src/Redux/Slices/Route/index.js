import { createSlice } from "@reduxjs/toolkit";
import { filterSettings } from "../../../Utils/filterSettings";
import { Builder } from "./thunks";

export const initialState = {
    filterSettings : JSON.parse(localStorage.getItem('filterSettings')) ||  filterSettings,
    routes: [],
    routesCount : 0,
    loading: false,
    error: null
}

export const RouteSlice = createSlice({
    name : 'route',
    initialState,
    reducers: {
        setState : (state, action) => {
            state.filterSettings = {...state.filterSettings, ...action.payload}
            localStorage.setItem('filterSettings', JSON.stringify(state.filterSettings))
        },
        setIsLoading : (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers : Builder
})

export const {setState, setIsLoading} = RouteSlice.actions
export default RouteSlice.reducer
