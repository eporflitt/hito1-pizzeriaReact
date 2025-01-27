import React, { useState } from "react";
import pizzaCart from "../components/pizzasCart"; // Array simulado para el carrito

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <div className="list-group">
        {cart.map((pizza) => (
          <div key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={pizza.img} alt={pizza.name} style={{ width: "50px" }} />
              <span className="ms-3">{pizza.name}</span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => decreaseQuantity(pizza.id)}
              >
                -
              </button>
              <span>{pizza.quantity}</span>
              <button
                className="btn btn-sm btn-success ms-2"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </button>
            </div>
            <div>${(pizza.price * pizza.quantity).toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <h4>Total: ${calculateTotal().toLocaleString()}</h4>
        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;