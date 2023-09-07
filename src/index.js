import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

const appRoot = createRoot(root);
appRoot.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
