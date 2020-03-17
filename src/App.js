import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import "./styles/custom.css";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div
        style={{ minWidth: "90vw", top: "100px" }}
        className="container mx-auto absolute  lg:mt-4"
      >
        <Hero />
      </div>
    </div>
  );
};

export default App;
