// src/store/profileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileInfo: null, // Store profile data
    loading: false, // Track loading state
    error: null, // Track any errors
  },
  reducers: {
    setProfileInfo: (state, action) => {
      state.profileInfo = action.payload;
      state.loading = false;
      state.error = null;
    },
    setProfileLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setProfileError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearProfileInfo: (state) => {
      state.profileInfo = null;
    },
  },
});

export const {
  setProfileInfo,
  setProfileLoading,
  setProfileError,
  clearProfileInfo,
} = profileSlice.actions;
export default profileSlice.reducer;
