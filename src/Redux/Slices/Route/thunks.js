import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from '../../../Api'

export const getRoutesThunk = createAsyncThunk('route/getRoutes', async (obj) => {
    const res = await api.getRoutes(obj)
    return res
})


export const Builder = (builder) => {
    builder.addCase(getRoutesThunk.fulfilled, (state, action) => {
        state.routes = action.payload.items
        state.routesCount = action.payload.total_count
    }).addCase(getRoutesThunk.rejected, (state, action) => {
        state.error = action.error
    }).addCase(getRoutesThunk.pending, (state, action) => {
        state.loading = true
    })
}