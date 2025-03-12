import React from 'react';
import { useState, useEffect } from 'react'


const CreateGame = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [genre, setGenre] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [gameCreated, setGameCreated] = useState(false);
    const [proximoId, setProximoId] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("check form");
            const isValid = title !== "" && price !== "" && genre !== "";
            setFormValid(isValid);
        }, 500);

        return () => {
            console.log("cleanup")
            clearTimeout(timer);
        }
    }, [title, price, genre]);

    // Obtiene el ultimo id de la lista de juegos y le suma 1 para obtener el proximo id
    const obtenerProximoId = async () => {
        try {
          const response = await fetch("http://localhost:3002/games");
          const data = await response.json();
      
          if (data.length === 0) {
            return 1;
          }
      
          const ultimoId = Math.max(...data.map(item => item.id));
          return ultimoId + 1;
        } catch (error) {
          console.error('Error al obtener el último ID:', error);
          return null;
        }
    }

    // Obtiene el proximo id y lo setea en el estado
      obtenerProximoId().then(setProximoId);

    // Funcion para agregar un juego
      const addGameHandler = async () => {
          const newGame = {
            id: String(proximoId), // String para que el id siempre se cree con comillas
            title,
            genre,
            price,
        }
        try {
            const response = await fetch("http://localhost:3002/games", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newGame),
            });
            if (response.ok) {
                const savedGame = await response.json();
                console.log('Juego guardado:', savedGame);
                setGameCreated(true);
            } else {
                console.error('Error al guardar el juego');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
        }
        setTitle("");
        setPrice("");
        setGenre("");
    }

    const ResetImputHandler = () => {
        setTitle("");
        setPrice("");
        setGenre("");
    }

    const changeGameCreated = () => {
        setGameCreated(false);
    }
  return (
    <div>
    <div className='new-game-controls'>
    <h2>Creación de Videojuego</h2>
    <div className='new-game-control'>
        <label>Título: </label>
        <input
         onChange={(event) => setTitle(event.target.value)}
         type="text"
         className='input-control'
         value={title} />
    </div>
    <div className='new-game-control'>
        <label>Genero:</label>
        <input
         onChange={(event) => setGenre(event.target.value)}
         type="text"
         className='input-control'
         value={genre}
          />
    </div>
    <div className='new-game-control'>
        <label>Precio:</label>
        <input
         onChange={(event) => setPrice(event.target.value)}
         type="text"
         className='input-control'
         value={price}
          />
    </div>
    <div className='new-game-actions'>
        <button onClick={ResetImputHandler} className='cancel-btn'>Cancelar</button>
        <button disabled={!formValid} onClick={addGameHandler} className='accept-btn'>Agregar</button>
    </div>
</div>
    {gameCreated && 
        <div className='gameABM'>
            <h4>Juego creado con éxito</h4>
            <button onClick={changeGameCreated}>Aceptar</button>
        </div>}
</div>
  )
}

export default CreateGame