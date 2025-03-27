import { memo } from 'react';
import './Games.css'
import GameItem from '../gameItem/GameItem'

const Games = memo(({games, genreSelected}) => {
    const gamesMapped = games.map((game) => (
        <GameItem
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            image={game.image}
        />
    ));

  return (
    <div className='games'>
            {gamesMapped.length > 0 ? (
                gamesMapped
            ) : (
                <h3>No hay videojuegos del género {genreSelected}</h3>
            )}
        </div>
  );
});

export default Games;