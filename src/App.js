import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import Router from "./routes";
import store from "./config/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
