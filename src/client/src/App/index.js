import React from "react";

import LoadingStatusProvider from "../LoadingStatusProvider";

import App from "./App";

export default function Root() {
  return (
    <div className="app">
      <LoadingStatusProvider>
        <App />
      </LoadingStatusProvider>
    </div>
  );
}
