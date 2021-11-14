import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import { Provider } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/reducers/store';
const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
