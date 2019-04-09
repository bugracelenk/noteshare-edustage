import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./views/HomePage";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/style.scss";

import "./scss/flaticon.css";
import "./scss/themify-icons.css";
ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.querySelector("#root")
);
