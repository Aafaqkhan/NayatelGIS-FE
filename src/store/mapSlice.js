// mapSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityName: "", // Default value for the city name
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload; // Set the city name
      console.log("city selected 33 :: ", state.cityName);
    },
  },
});

export const { setCityName } = mapSlice.actions;
export default mapSlice.reducer;
