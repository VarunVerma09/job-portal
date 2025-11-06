import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);