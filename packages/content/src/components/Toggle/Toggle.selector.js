import { createSelector } from "@reduxjs/toolkit";

export const selectToggleValue = createSelector(
  [(state) => state.toggle || { value: false }],
  (toggle) => {
    return toggle.value;
  }
);
