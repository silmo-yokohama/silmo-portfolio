import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./frontMenuSlicer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
