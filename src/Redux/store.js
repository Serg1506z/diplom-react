import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from "./Slices/Tickets";
import RouteSlice from "./Slices/Route";
import SeatsSlice from "./Slices/Seats";

export const store = configureStore({
    reducer: {
        tickets : TicketSlice,
        route : RouteSlice,
        seats : SeatsSlice
    }
})