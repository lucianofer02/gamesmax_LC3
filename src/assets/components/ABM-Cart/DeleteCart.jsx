import React from 'react';

const DeleteCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCart;