import React, { useContext, useState } from "react";

const LoadingStatusContext = React.createContext();

const LoadStatusProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    isLoading,
    setIsLoading,
  };

  return (
    <LoadingStatusContext.Provider value={value}>
      {children}
    </LoadingStatusContext.Provider>
  );
};

export default LoadStatusProvider;

export const useLoadingStatus = () => useContext(LoadingStatusContext);
