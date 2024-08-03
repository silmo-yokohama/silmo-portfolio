import { createSlice } from "@reduxjs/toolkit";


export const Themes = {
  dark: "myDark",
  light: "myLight",
};

const setTheme = theme => {
  document.querySelector("html").setAttribute("data-theme", theme);
  window.localStorage.setItem("currentTheme", theme);
}

export const themeSlicer = createSlice({
  name: "ThemeSwitch",
  initialState: {
    activeTheme: window.localStorage.getItem('currentTheme') || Themes.light
  },
  reducers: {
    themeToggle: state => {
      const theme =
        state.activeTheme === Themes.dark ? Themes.light : Themes.dark;
      state.activeTheme = theme
      setTheme(theme);
    },
    themeChange: (state ,action) => {
      state.activeTheme = action.payload;
      setTheme(action.payload);
    }
  }
});

export const { themeChange ,themeToggle } = themeSlicer.actions;
export default themeSlicer.reducer;
