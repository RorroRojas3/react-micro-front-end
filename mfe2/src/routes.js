// Context
import { UserContextProvider } from "./userContext";

// My components
import App from "./App";
import Callback from "./callback";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const MyNavbar = React.lazy(() => import("MFE1/MyNavbar"));

const Routes = () => {
  return (
    <div>
      <UserContextProvider>
        <MyNavbar />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/callback">
              <Callback />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
};

export default Routes;
