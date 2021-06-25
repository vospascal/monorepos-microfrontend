import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: {},
  loading: false,
  error: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    data: (state, action) => {
      state.data = action.payload.data;
    },
    loading: (state, action) => {
      state.loading = action.payload.loading;
    },
    error: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions: globalActions, reducer: globalReducer } = globalSlice;
