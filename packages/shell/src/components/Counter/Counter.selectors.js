import { createSelector } from '@reduxjs/toolkit';

export const selectCounterValue = createSelector(
    [(state) => state.counter || {value: 0}],
    counter => {
        return counter.value
    }
);