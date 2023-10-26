import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggled: (state: any) => {
      state.toggle = true;
    },
    changedToggle: (state: any) => {
      state.toggle = false;
    },
  },
});

export const { changedToggle, toggled } = globalState.actions;

export default globalState.reducer;
