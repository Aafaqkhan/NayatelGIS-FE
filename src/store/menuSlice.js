import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    selectedMenu: null,
  },
  reducers: {
    selectMenu: (state, action) => {
      if (state.selectedMenu?.id === action.payload.id) {
        state.selectedMenu = null; // Deselect if the same item is selected
      } else {
        state.selectedMenu = action.payload;
      }
    },
    deselectMenu: (state) => {
      state.selectedMenu = null;
    },
  },
});

export const { selectMenu, deselectMenu } = menuSlice.actions;
export default menuSlice.reducer;
