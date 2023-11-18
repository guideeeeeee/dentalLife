import { createSlice , current} from '@reduxjs/toolkit'
const initialState = {
    client:null
}
const ClientSlice=createSlice(
    {
        name:"Client",
        initialState,
        reducers:{
            addClient:(state,action)=>{
                state.client = action.payload;
                console.log(current(state))
            }
        }
    }
)
export const {addClient} = ClientSlice.actions
export default ClientSlice.reducer