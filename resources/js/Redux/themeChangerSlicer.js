import { createSlice } from "@reduxjs/toolkit";


const Themes = {
  dark: "myDark",
  light: "myLight",
};

export const themeSlicer = createSlice({
  name: "ThemeSwitch",
  initialState: {
    activeTheme: window.localStorage.getItem('currentTheme') || Themes.light
  },
  reducers: {
    themeToggle: state => {
      state.activeTheme = state.activeTheme === Themes.dark ? Themes.light : Themes.dark;
      window.localStorage.setItem('currentTheme',state.activeTheme);
    },
    themeChange: (state ,action) => {
      state.activeTheme = action.payload;
      window.localStorage.setItem('currentTheme',state.activeTheme);
    }
  }
});

export const { themeChange ,themeToggle } = themeSlicer.actions;
export default themeSlicer.reducer;
