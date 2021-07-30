import React, { useContext, useEffect, useState } from "react";

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
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthData = () => useContext(AuthContext);
