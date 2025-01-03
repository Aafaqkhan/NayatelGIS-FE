import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import settingsReducer from "./settingsSlice";
import mapReducer from "./mapSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
    profile: profileReducer,
    settings: settingsReducer,
    map: mapReducer,
  },
});
