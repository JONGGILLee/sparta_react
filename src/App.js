import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./Home";
import Score from "./Score";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Score/:day_score" exact>
        <Score />
      </Route>
    </div>
  );
}

export default App;
