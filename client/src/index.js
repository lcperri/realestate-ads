import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalStyles from "./styledComponents/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles/>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
