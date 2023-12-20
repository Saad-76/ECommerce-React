import React from "react";
import { Provider } from "react-redux";

import Router from "./routes";
import store from "./config/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
