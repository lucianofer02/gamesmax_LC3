import { memo } from 'react';
import GameItem from '../gameItem/GameItem'

const Games = memo(({games, genreSelected}) => {
    const gamesMapped = games.map((game) => (
        <GameItem
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
        />
    ));

  return (
    <div className='games'>
        <div className='game'>
            {gamesMapped.length > 0 ? (
                gamesMapped
            ) : (
                <h3>No hay videojuegos del género {genreSelected}</h3>
            )}
        </div>
    </div>
  );
});

export default Games;