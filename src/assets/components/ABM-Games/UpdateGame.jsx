import React, {useEffect, useState} from 'react';

const UpdateGame = () => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [gameUpdated, setGameUpdated] = useState(false);

    // Get de todos los juegos
    useEffect(() => {
        fetch("http://localhost:3002/games", {
          headers: {
            accept: "application/json",
          },
    })
      .then((response) => response.json())
      .then(gameData => {
        setGames(gameData);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    // Update de un juego
    const updateGame = () => {
        fetch(`http://localhost:3002/games/${selectedGame}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: selectedGame,
            title: title,
            genre: genre,
            price: price,
          }),
        })
          .then(response => response.json())
          .then(updatedGame => {
            setGames(games.map(game => game.id === updatedGame.id ? updatedGame : game));
            setGameUpdated(true);
          })
          .catch(error => {
            console.error("Hubo un error al actualizar el juego:", error);
          });

            setTitle('');
            setGenre('');
            setPrice('');
      };
    

    const handleChange = (event) => {
        setSelectedGame(event.target.value);
    };
    
    // Funcion para evitar el refresh del form
      const handleSubmit = (e) => {
        e.preventDefault();
    };

    const changeGameUpdated = () => {
        setGameUpdated(false);
    }

    const ResetImputHandler = () => {
        setTitle("");
        setPrice("");
        setGenre("");
    }

  return (
    <div className="new-game-controls">
        <h2>Update Game</h2>
        <select value={selectedGame} onChange={handleChange}>
            <option hidden>Game</option>
            {games.map((game) => {
                return (
                    <option key={game.id} value={game.id}>
                        {game.title}
                    </option>
                );
            })}
        </select>

        {selectedGame && (
        <form onSubmit={handleSubmit}>
            <div className="new-game-control">
                <label>Nuevo Título:</label>
                    <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    />
            </div>
            <div className="new-game-control">
                <label>Nuevo Genero:</label>
                <input
                type="text"
                id="genre"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
                required
                />
            </div>
            <div>
                <label>Nuevo Precio:</label>
                <input
                type="text"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
                />
            </div>
        <button type="submit" className='cancel-btn' onClick={ResetImputHandler}>Cancelar</button>
        <button type="submit" className='accept-btn' onClick={updateGame}>Actualizar Juego</button>
        </form>
      )}
      {gameUpdated && 
        <div className='gameABM'>
            <h4>Juego actualizado con éxito</h4>
            <button onClick={changeGameUpdated}>Aceptar</button>
        </div>}
    </div>
  )
}

export default UpdateGame;