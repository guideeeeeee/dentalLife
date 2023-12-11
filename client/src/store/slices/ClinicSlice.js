import { createSlice, current } from "@reduxjs/toolkit";

//initial Data clinic
const initialState = {
  clinic: [],
  plab: null,
};

const clinicSlice = createSlice({
  name: "Clinic",
  initialState,
  reducers: {
    setClinic: (state, action) => {
      state.clinic = action.payload;
      console.log(current(state));
    },
    setPlab: (state, action) => {
      state.plab = action.payload;
    },
    setClientUuid:(state, action) => {
      state.clientUuid = action.payload;
    },
  },
});

export const { setClinic, setPlab ,setClientUuid} = clinicSlice.actions;
export default clinicSlice.reducer;
