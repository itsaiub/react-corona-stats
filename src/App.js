import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ChartPage from "./pages/ChartPage";

import "./styles/custom.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="container mt-20 flex-1 flex justify-center items-center flex-col">
          <Switch>
            <Route path="/chart" exact component={ChartPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
