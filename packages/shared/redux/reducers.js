/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";

import { globalReducer } from "./Global/Global.slice";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers) {
  return combineReducers({
    global: globalReducer,
    ...injectedReducers,
  });
}
