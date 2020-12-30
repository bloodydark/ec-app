import React from "react";
// import Router from "./Router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Home } from "./templates";

const App = () => {
  return (
    // <main>
    //   <Router />
    // </main>
    <>
      <Router>
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"(/)?"} component={Home} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
