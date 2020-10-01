import React from "react";
import HomePage from "./pages/homepages/HomePage";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
