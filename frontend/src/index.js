import React from "react";
import ReactDOM from "react-dom";
import GLobalProvider from "./Context/Global";

import "../node_modules/antd/dist/antd.css";
import App from "./App";

ReactDOM.render(
  <GLobalProvider>
    <App />
  </GLobalProvider>,
  document.getElementById("root")
);
