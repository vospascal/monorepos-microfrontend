import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { configureAppStore } from "./configureStore";

import { ConnectedRouter } from "connected-react-router";
import history from "./history";

const initialState = {};

const store = configureAppStore(initialState, history);
const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </ReduxProvider>
  );
};

export default Provider;
