import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import MovieList from "../pages/MovieList";
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
                <Route exact path="/" component={MovieList} />
                <Route path="/login" component={Login} />
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
