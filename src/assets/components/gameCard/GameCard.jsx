import React from 'react'
import './GameCard.css'

const GameCard = ({children}) => {
  return (
    <div className='game-card'>
        {children}
    </div>
  )
}

export default GameCard;