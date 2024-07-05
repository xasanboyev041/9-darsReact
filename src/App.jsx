import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FiredUsers from "./pages/FiredUsers";
import { UserProvider } from "./context/UserContext";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fired-users" component={FiredUsers} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
