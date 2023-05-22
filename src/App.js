import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
const App = () => {
  return (
    <AuthProvider>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/web" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router> */}
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/web" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </HashRouter>
    </AuthProvider>
  );
};

export default App;