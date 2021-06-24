import { createSlice } from "@reduxjs/toolkit";
import {useInjectReducer} from "../../../../shell/src/utils";

export const initialState = {
    value: true,
}

export const slice = createSlice({
    name: "toggle",
    initialState: initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { actions: toggleActions, reducer } = slice;

export const useToggleSlice = () => {
    useInjectReducer({ key: slice.name, reducer: slice.reducer });
    return { actions: slice.actions };
};

