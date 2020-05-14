import React, { useState, useContext } from "react";
import { PicContext } from "../../utils/picContext";
import CartItem from "../../components/CartItem";
import "./Cart.css";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, clearCart } = useContext(PicContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = 9.99 * cartItems.length;

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
      <h1>Check Out</h1>
      {cartItemElements}

      {cartItems.length > 0 ? (
        <>
          <p className="total-cost">Total: {totalCostDisplay}</p>
          <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
          </div>
        </>
      ) : (
        <h2 className="empty">You have no items in your cart</h2>
      )}
    </main>
  );
}

export default Cart;
