import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./frontMenuSlicer";
import themeReducer from "./themeChangerSlicer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer
  },
});
