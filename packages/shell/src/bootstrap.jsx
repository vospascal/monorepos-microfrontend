import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {configureAppStore} from "./redux/configureStore";

const store = configureAppStore();
import App from "./App";

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    root.attachShadow({ mode: "open" })
);



