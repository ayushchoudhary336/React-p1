import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementbyAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increment, decrement, incrementbyAmount } = counterslice.actions;
export default counterslice.reducer;
