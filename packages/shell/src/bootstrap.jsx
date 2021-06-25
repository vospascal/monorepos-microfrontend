import React from "react";
import ReactDOM from "react-dom";

import Provider from "../../shared/redux/Provider";
import App from "./App";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  root.attachShadow({ mode: "open" })
);
