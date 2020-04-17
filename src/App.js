import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";

import Photos from "./pages/Photos";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { PicContext } from "./picContext";

function App() {
  const { currentPage, setCurrentPage } = useContext(PicContext);

  useEffect(() => {
    setCurrentPage("");
  }, [currentPage]);

  return (
    <div>
      <Header />
      <Switch>
        {currentPage === "/Photo-Shopper/cart" && (
          <Redirect to="/Photo-Shopper/" />
        )}

        <Route exact path="/Photo-Shopper/">
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
