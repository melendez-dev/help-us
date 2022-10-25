import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const movilSlice = createSlice({
  name: "movil",
  initialState,
  reducers: {
    setMovil: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMovil } = movilSlice.actions;

export default movilSlice.reducer;
