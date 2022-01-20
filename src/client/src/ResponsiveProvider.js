import React, { useContext, useEffect, useState } from "react";

import { throttle } from "./utils";

const ResponsiveContext = React.createContext();

const ResponsiveProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      throttle(() => {
        setWidth(window.innerWidth);
      }, 200)
    );
  }, []);

  return (
    <ResponsiveContext.Provider value={width}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;

export const useWidth = () => useContext(ResponsiveContext);
