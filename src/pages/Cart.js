import React, { useState, useContext } from "react";
import { PicContext } from "../picContext";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, clearCart } = useContext(PicContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      clearCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <h2>You have no items in your cart</h2>
        )}
      </div>
    </main>
  );
}

export default Cart;
