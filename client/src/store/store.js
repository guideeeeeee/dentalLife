import { configureStore } from '@reduxjs/toolkit'
import BookingSlice from './slices/BookingSlice'
import ClinicSlice from './slices/ClinicSlice'
import ClientSlice from './slices/ClientSlice'
export default configureStore({
    reducer: {
        Booking:BookingSlice,
        Clinic:ClinicSlice,
        Client:ClientSlice,
    },
})