import React from "react";
import { render } from "react-dom";
import "./index.scss";
import MainRouter from "./components/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { polyfill } from "es6-promise";
polyfill();

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
