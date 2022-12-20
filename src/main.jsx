import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataContext from "./Context/DataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
);
