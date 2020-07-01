import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Context } from "./Context/AuthContext";
import { Home, Login, AddNaver, EditNaver } from "./pages";

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>loading..</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
}

const Routes = () => (
  <Switch>
    <CustomRoute exact path="/login" component={Login} />
    <CustomRoute isPrivate exact path="/" component={Home} />
    <CustomRoute isPrivate exact path="/add" component={AddNaver} />
    <CustomRoute isPrivate exact path="/edit" component={EditNaver} />
  </Switch>
);

export default Routes;
