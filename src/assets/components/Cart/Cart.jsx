import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import './Cart.css';
import { BsTrash } from 'react-icons/bs';

const Cart = ({ cartItems }) => {
    const { user, setUser } = useAuth();

    const handleRemoveFromCart = async (indexToRemove) => {  
      try {
        // Crea un nuevo array sin el juego que se desea eliminar
        const updatedCart = user.cart.filter((_, index) => index !== indexToRemove);
  
        // Actualiza el carrito en el backend
        const response = await fetch(`http://localhost:3001/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cart: updatedCart }),
        });
  
        if (response.ok) {
          // Actualiza el estado del usuario localmente
          const updatedUser = { ...user, cart: updatedCart };
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
          throw new Error('Error al actualizar el carrito');
        }
      } catch (error) {
        console.error('Error al borrar del carrito:', error);
        alert('Hubo un problema al borrar el juego del carrito.');
      }
    };
  

  return (
    <div className="cart-dropdown">
      <h3>Carrito de Compras</h3>
      <div>
        {!user || !user.cart || user.cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {user.cart.map((item, index) => (
              <li key={index}  className='cart-item'>
                {item.title} - <b>${item.price}</b>
                <button className='buy-btn'>Comprar</button>
                <button className='delete-btn' onClick={() => handleRemoveFromCart(index)}><BsTrash/></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
