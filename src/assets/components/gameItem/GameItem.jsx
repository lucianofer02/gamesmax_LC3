import React, { useState, useEffect, useCallback } from 'react';
import GameCard from '../gameCard/GameCard'
import '../gameItem/GameItem.css'
import { BsFillCartPlusFill } from 'react-icons/bs';

const GameItem = ({title, price, genre}) => {
  
  return (
    <GameCard>
        <div className='game-item-containers'>
            <div className='game-item-container'>
                <h1>{title}</h1>
                <h3>{genre}</h3>
                <h3>${price}</h3>
                <button><BsFillCartPlusFill /> Comprar</button>
            </div>
        </div>
    </GameCard>
  );}
export default GameItem;