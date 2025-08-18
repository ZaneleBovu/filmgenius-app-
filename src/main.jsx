import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ correct path
// import "./index.css"; // ✅ optional, only if it exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
