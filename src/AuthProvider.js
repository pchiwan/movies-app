import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

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

export const useAuthData = () => useContext(AuthContext);
