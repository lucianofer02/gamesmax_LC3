/* import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

const CreateCart = ({ game, addToCart }) => {
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (user) {
      addToCart(game);
    } else {
      alert('Debes iniciar sesión para agregar al carrito');
    }
  };

  return (
    <button onClick={handleAddToCart}>Agregar al Carrito</button>
  );
};

export default CreateCart; */