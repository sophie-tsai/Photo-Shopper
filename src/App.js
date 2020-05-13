import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/CartPage";
import HeartPage from "./pages/HeartPage/HeartPage";
import Photos from "./pages/Photos/Photos";
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
        <Route exact path="/Photo-Shopper/Heart">
          <HeartPage />
        </Route>

        <Route exact path="/Photo-Shopper/Cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
