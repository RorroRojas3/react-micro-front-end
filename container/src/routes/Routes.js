import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>;
};

export default Routes;
