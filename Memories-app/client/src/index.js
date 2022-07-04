import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from './reducers/index.js'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import './index.css'
import App from "./App.js";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
