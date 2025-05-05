import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    form : {
        from: '',
        to: '',
        dateDeparte : '',
        deteArrival : '',
    },
    personalData : localStorage.getItem('personalData') ? JSON.parse(localStorage.getItem('personalData')) : [],
    paymentData : localStorage.getItem('paymentData') ? JSON.parse(localStorage.getItem('paymentData')) : {
        "first_name": "",
        "last_name": "",
        "patronymic": "",
        "phone": "",
        "email": "",
        "payment_method": "cash" // или online
    }
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
        },
        setPaymentData: (state, action) => {
            state.paymentData = action.payload
            localStorage.setItem('paymentData', JSON.stringify(action.payload))
        }
    }
})

export const {setState, setPaymentData, setPersonalData} = TicketSlice.actions

export default TicketSlice.reducer