import { useEffect, useState } from 'react'
import React from 'react';
import './GamesForm.css'
import CreateGame from '../ABM-Games/CreateGame';
import UpdateGame from '../ABM-Games/UpdateGame';
import DeleteGame from '../ABM-Games/DeleteGame';
const Gamesform = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [genre, setGenre] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true)
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
      };

      // Obtiene el proximo id y lo setea en el estado
      obtenerProximoId().then(setProximoId);

      // Funcion para agregar un juego
      const addGameHandler = async () => {
          const newGame = {
            id: proximoId,
            title,
            genre,
            price,
        };
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
        <CreateGame />
        <UpdateGame />
        <DeleteGame onDelete={(id) => setGames(prevGames => prevGames.filter(game => game.id !== id))}/>
    </div>
  );
}
  export default Gamesform;
