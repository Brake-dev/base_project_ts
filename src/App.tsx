import React from "react";
import { Switch, Router } from "react-router";
import { Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { TestView1, TestView2 } from "./Views";

import { browserHistory } from "./utils";

const App = () => (
  <Router history={browserHistory}>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" render={(props) => <TestView1 {...props} />} />
        <Route exact path="/2" render={(props) => <TestView2 {...props} />} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
