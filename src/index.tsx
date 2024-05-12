import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "./Context/ThemeContext";
import AuthUserContextProvider from "./Context/AuthUserContext";
import ChatsContextProvider from "./Context/ChatsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <AuthUserContextProvider>
          <ChatsContextProvider>
            <App />
          </ChatsContextProvider>
        </AuthUserContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
