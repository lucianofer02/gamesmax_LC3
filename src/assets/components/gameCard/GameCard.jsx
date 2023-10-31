import React from 'react'
import './GameCard.css'

const GameCard = ({children}) => {
  return (
    <div className='game-card-container'>
      <div className='game-card'>
          {children}
      </div>
    </div>
  )
}

export default GameCard;