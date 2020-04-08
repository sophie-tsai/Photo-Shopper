import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Photo-Shopper">
          <Photos />
        </Route>
        <Route path="/Photo-Shopper/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
