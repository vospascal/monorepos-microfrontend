import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: {},
    loading: false,
    error: false,
  },
  reducers: {
    data: (state, action) => {
      console.log(action.payload);
      state.data = action.payload.data;
    },
    loading: (state, action) => {
      console.log(action.payload);
      state.loading = action.payload.loading;
    },
    error: (state, action) => {
      console.log(action.payload);
      state.error = action.payload.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const { data, loading, error } = dataSlice.actions;

export default dataSlice.reducer;
