import React, { memo } from 'react'
import Gamesform from '../gamesForm/GamesForm'

const NewGame = memo(({onGameSaved}) => {
    const saveGameHandler = (game) => {
        onGameSaved(game);
    }
  return (
    <div className='new-game'>
        <Gamesform onSaveGame={saveGameHandler}/>
    </div>
  )
});

export default NewGame