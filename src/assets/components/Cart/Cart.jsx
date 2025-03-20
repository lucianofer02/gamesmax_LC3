import React from 'react';
// import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <h3>Carrito de Compras</h3>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
