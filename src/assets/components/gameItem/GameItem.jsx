import React, { useState, useEffect, useCallback, useContext } from 'react';
import GameCard from '../gameCard/GameCard'
import '../gameItem/GameItem.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
import AuthContext, { useAuth } from '../../../context/AuthContext';

const GameItem = ({title, price, genre}) => {
  const { user, setUser } = useAuth();

  const handleAddToCart = () => {
    if (user) {
      addToCart({title, price, genre});
    } else {
      alert('Debes iniciar sesión para agregar al carrito');
    }
  };

  const addToCart = async (game) => {
    const gameAlreadyInCart = user.cart.some(
      (item) => item.title === game.title
    );

    if (gameAlreadyInCart) {
      // Si el juego ya está en el carrito, muestra una alerta y no continúa
      alert("Este juego ya está en el carrito.");
      return;
    }
    
    try {
      const updatedCart = [...(user.cart || []), game]; // Agrega el juego al carrito actual
      const response = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: updatedCart }),
      });
  
      if (response.ok) {
        const updatedUser = { ...user, cart: updatedCart }; // Actualiza el usuario
        setUser(updatedUser);     
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        throw new Error("Error al actualizar el carrito");
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      alert("Hubo un problema al agregar el juego al carrito.");
    }
  };
  
  return (
    <GameCard>
        <div className='game-item-containers'>
            <div className='game-item-container'>
                <h1>{title}</h1>
                <h3>{genre}</h3>
                <h3>${price}</h3>
                <button onClick={handleAddToCart}><BsFillCartPlusFill /> Agregar al carrito</button>
            </div>
        </div>
    </GameCard>
  );}
export default GameItem;