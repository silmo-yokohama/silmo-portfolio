import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./frontMenuSlicer";
import themeReducer from "./themeChangerSlicer";
import loadingReducer from "./loadedSlicer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    loadingCounter: loadingReducer,
  },
});
