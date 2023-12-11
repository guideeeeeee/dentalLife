import { createSlice , current} from '@reduxjs/toolkit'
const initialState = {
    selecClinic:null,
    selecTreat:null,
    selecDoc:null,
    date:null,
    status:null,
    id:null,
    time:null,
    namedoc:null,
}
const BookingSlice = createSlice({
    name: 'Booking',
    initialState,
    reducers:{
        addClinic:(state,action)=>{
            state.selecClinic = action.payload
            console.log(current(state))
        },
        AddTreat:(state,action)=>{
            state.selecTreat = action.payload
            console.log(current(state))
        },
        AddDoc:(state,action)=>{
            state.selecDoc = action.payload
            console.log(current(state))
        },
        AddDate:(state,action)=>{
            state.date = action.payload
            console.log(current(state))
        },
        AddStatus:(state,action)=>{
            state.status = action.payload
            console.log(current(state))
        },
        Addid:(state,action)=>{
            state.id = action .payload
            console.log(current(state))
        },
        Addtime:(state,action)=>{
            state.time = action .payload
            console.log(current(state))
        },
        Addnamedoc:(state,action)=>{
            state.namedoc = action.payload
            console.log(current(state))
        }
    }
})

export const { addClinic,AddTreat,AddDoc,AddDate,AddStatus,Addid,Addtime } = BookingSlice.actions
export default BookingSlice.reducer