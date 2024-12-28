import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
    profile: profileReducer,
  },
});
