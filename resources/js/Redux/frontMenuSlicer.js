import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    setMenuOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
