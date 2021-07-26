import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login, { Register } from "../pages/Login";
import Catalog from "../pages/Catalog";
import User from "../pages/User";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import AuthProvider from "../AuthProvider";
import ResponsiveProvider from "../ResponsiveProvider";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <ResponsiveProvider>
          <Router>
            <Header />
            <main>
              <Switch>
                <Route exact path="/" component={Catalog} />
                <Route path="/user" component={User} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </main>
          </Router>
        </ResponsiveProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
