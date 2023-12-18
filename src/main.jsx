import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { AppProvider } from "./context/context.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
