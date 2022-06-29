import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import UserStore from "./store/userStore";
import ProductStore from "./store/productStore";
import "./index.css";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      products: new ProductStore(),
    }}
  >
    <Router>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById("root")
);
