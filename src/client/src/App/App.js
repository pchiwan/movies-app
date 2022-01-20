import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login, { Register } from "../pages/Login";
import Catalog from "../pages/Catalog";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import AuthProvider from "../AuthProvider";
import ResponsiveProvider from "../ResponsiveProvider";
import { useLoadingStatus } from "../LoadingStatusProvider";

import "./App.scss";

function App() {
  const { isLoading } = useLoadingStatus();

  return (
    <div className="app">
      <AuthProvider>
        {isLoading ? (
          <div className="app-spinner">
            <Spinner />
            <span>Loading</span>
          </div>
        ) : (
          <ResponsiveProvider>
            <Router>
              <Header />
              <main>
                <Switch>
                  <Route exact path="/" component={Catalog} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </main>
            </Router>
          </ResponsiveProvider>
        )}
      </AuthProvider>
    </div>
  );
}

export default App;
