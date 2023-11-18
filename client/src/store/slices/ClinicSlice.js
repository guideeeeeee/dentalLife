import { createSlice,current } from "@reduxjs/toolkit";


//initial Data clinic
const initialState={
    clinic:[]
}

const clinicSlice = createSlice(
    {
        name:"Clinic",
        initialState,
        reducers:{
          setClinic:(state,action)=>{
                state.clinic = action.payload;
                console.log(current(state))
            }
        }
    }
)


export const {setClinic} = clinicSlice.actions
export default clinicSlice.reducer