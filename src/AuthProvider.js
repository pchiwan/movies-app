import React, { useContext, useEffect, useState } from "react";

import { useLoadingStatus } from "./LoadingStatusProvider";
import { getLoggedUser } from "./services/authService";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const { setIsLoading } = useLoadingStatus();

  useEffect(() => {
    async function load() {
      const user = await getLoggedUser();
      setIsLoading(false);
      if (user) {
        login(user);
      }
    }

    load();
  }, [setIsLoading]);

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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
