import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import './Cart.css';

const Cart = ({ cartItems }) => {
    const { user } = useAuth();

  return (
    <div className="cart-dropdown">
      <h3>Carrito de Compras</h3>
      <div className='cart-item'>
        {!user || user.cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {user.cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
