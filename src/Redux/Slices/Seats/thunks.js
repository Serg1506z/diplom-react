import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../Api";

export const getSeatsThunk = createAsyncThunk('seats/getSeats', async (data) => {
    try{
        return await api.getSeatsPlace(data)
    } catch (e) {

    }
})

export const Builder = (builder) => {
    builder.addCase(getSeatsThunk.fulfilled, (state, action) => {
        state.seats = action.payload
    })
    .addCase(getSeatsThunk.rejected, (state, action) => {})
    .addCase(getSeatsThunk.pending, (state, action) => {})
}