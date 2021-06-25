import { createSlice } from "@reduxjs/toolkit";
import { useInjectReducer } from "../../../../shared/utils/injector";

export const initialState = {
  value: 0,
};

export const slice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { actions: counterActions, reducer } = slice;

export const useCounterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
