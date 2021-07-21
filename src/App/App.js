import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MovieList from "../pages/MovieList";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import AuthProvider from "../AuthProvider";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={MovieList} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
