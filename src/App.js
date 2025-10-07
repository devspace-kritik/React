import React from "react";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const rootElement = reactDOM.createRoot(document.getElementById("root"));

rootElement.render(<AppLayout/>);
