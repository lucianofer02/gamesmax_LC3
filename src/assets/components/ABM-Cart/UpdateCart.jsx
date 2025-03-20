import React from 'react';

const UpdateCart = ({ cart, updateCart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <span>{item.name} - {item.quantity}</span>
          <button onClick={() => updateCart(item, item.quantity + 1)}>+</button>
          <button onClick={() => updateCart(item, item.quantity - 1)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default UpdateCart;