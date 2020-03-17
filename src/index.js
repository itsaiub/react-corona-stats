import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { StoreProvider } from "./context/index";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
