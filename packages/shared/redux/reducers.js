/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

import { globalReducer } from "./Global/Global.slice";

import history from "./history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers) {
  return combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    ...injectedReducers,
  });
}
