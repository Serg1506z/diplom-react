import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    form : {
        from: '',
        to: '',
        dateDeparte : '',
        deteArrival : '',
    }
}

export const TicketSlice = createSlice({
    name : 'ticket',
    initialState,
    reducers: {
        setState : (state, action) => {
            state.form = action.payload
        }
    }
})

export const {setState} = TicketSlice.actions

export default TicketSlice.reducer