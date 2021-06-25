import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { configureAppStore } from "../../shared/redux/configureStore";

const store = configureAppStore();
const Provider = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
