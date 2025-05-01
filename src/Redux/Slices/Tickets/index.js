import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    form : {
        from: '',
        to: '',
        dateDeparte : '',
        deteArrival : '',
    },
    personalData : localStorage.getItem('personalData') ? JSON.parse(localStorage.getItem('personalData')) : []
}

export const TicketSlice = createSlice({
    name : 'ticket',
    initialState,
    reducers: {
        setState : (state, action) => {
            state.form = action.payload
        },
        setPersonalData: (state, action) => {
            state.personalData = action.payload
            localStorage.setItem('personalData', JSON.stringify(action.payload))
        }
    }
})

export const {setState, setPersonalData} = TicketSlice.actions

export default TicketSlice.reducer