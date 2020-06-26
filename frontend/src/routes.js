import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Login, AddNaver, EditNaver } from "./pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/add" component={AddNaver} />
      <Route exact path="/edit" component={EditNaver} />
    </Switch>
  </Router>
);

export default Routes;
