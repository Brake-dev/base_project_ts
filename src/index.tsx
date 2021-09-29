import React, { FC } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const render = (Component: FC) => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Component />
      </AppContainer>
    </ThemeProvider>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App.tsx", () => {
    render(App);
  });
}
