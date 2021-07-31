import React, { useContext, useEffect, useState } from "react";

import Spinner from "./components/Spinner";
import { getLoggedUser } from "./services/authService";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getLoggedUser();
      if (user) {
        login(user);
      }
      setIsLoading(false);
    }
    load();
  }, []);

  function login(user) {
    setAuthData({
      ...user,
      isAuthenticated: true,
    });
  }

  function logout() {
    setAuthData({});
  }

  const value = {
    ...authData,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? (
        <div className="app-spinner">
          <Spinner />
          <span>Loading</span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
