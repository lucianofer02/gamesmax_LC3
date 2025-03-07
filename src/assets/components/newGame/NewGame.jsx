import React, { memo } from 'react'
import Gamesform from '../gamesForm/GamesForm'

const NewGame = memo(() => {
    
  return (
    <div className='new-game'>
        <Gamesform />
    </div>
  )
});

export default NewGame