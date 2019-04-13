import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./views/HomePage";
import LoginPage from "views/LoginPage/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser } from "actions/authActions";
import thunk from "redux-thunk";
import reducers from "reducers";

import { FlashMessages } from "components/Utils";
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

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FlashMessages />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
