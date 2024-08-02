import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const loadingSlicer = createSlice({
  name: "loadingCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = loadingSlicer.actions;
export default loadingSlicer.reducer;
