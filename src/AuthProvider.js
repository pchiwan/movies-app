import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  function login(username, password) {
    setAuthData({
      ...authData,
      isAuthenticated: true,
      name: "Commander Shepard",
    });
  }

  function logout() {
    setAuthData({});
  }

  const value = {
    isAuthenticated: false,
    name: "",
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthData = () => useContext(AuthContext);
