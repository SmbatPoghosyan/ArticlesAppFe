import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateArticle from "./components/CreateArticle";
import Redirect from "react-router-dom/es/Redirect";

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));

  return (
      <Switch>
          <Route
              exact
              path="/"
              render={() => {
                  return (
                      isLoggedIn ?
                          <Redirect to="/home" /> :
                          <Redirect to="/login" />
                  )
              }}
          />
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/home">
              <Home />
          </Route>
          <Route path="/add">
              <CreateArticle />
          </Route>
      </Switch>
  );
}

export default App;
