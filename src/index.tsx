import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import AppComponent from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/GlobalStyles";
import { MyTheme } from "./styles/Theme.styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={MyTheme}>
    <AppComponent />
    <GlobalStyles />
  </ThemeProvider>
);

reportWebVitals();
