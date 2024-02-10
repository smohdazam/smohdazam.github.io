import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});
// eslint-disable-next-line no-unused-vars
const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
