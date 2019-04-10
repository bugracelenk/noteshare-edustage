import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./views/HomePage";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

import "bootstrap/dist/css/bootstrap.css";
import "./scss/style.scss";
import "./scss/flaticon.css";
import "./scss/themify-icons.css";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
