import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./providers/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
