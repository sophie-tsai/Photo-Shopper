import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PicContextProvider } from "./picContext";

ReactDOM.render(
  <React.StrictMode>
    <PicContextProvider>
      <Router>
        <App />
      </Router>
    </PicContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
