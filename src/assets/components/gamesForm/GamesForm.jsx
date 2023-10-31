import { useEffect, useState } from 'react'
import React from 'react';
import './GamesForm.css'
const Gamesform = ({onSaveGame}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [genre, setGenre] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [formValid, setFormValid] = useState(false);

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

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    }

    const changeGenreHandler = (event) => {
        setGenre(event.target.value);
    }

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    }

    const addGameHandler = () => {
        const newGame = {
            title,
            genre,
            price,
        };
        onSaveGame(newGame);
        setTitle("");
        setPrice("");
        setGenre("");
    }

    const ResetImputHandler = () => {
        setTitle("");
        setPrice("");
        setGenre("");
    }

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

  return (
    <div>
        <button onClick={toggleCollapse} className='form-btn'>
            {isCollapsed ? 'Mostrar Formulario' : 'Ocultar Formulario'}
        </button>
        {!isCollapsed && (
            <div className='new-game-controls'>
            <h2>Creación de Videojuego</h2>
            <div className='new-game-control'>
                <label>Título: </label>
                <input
                 onChange={changeTitleHandler}
                 type="text"
                 className='input-control'
                 value={title} />
            </div>
            <div className='new-game-control'>
                <label>Genero:</label>
                <input
                 onChange={changeGenreHandler}
                 type="text"
                 className='input-control'
                 value={genre}
                  />
            </div>
            <div className='new-game-control'>
                <label>Precio:</label>
                <input
                 onChange={changePriceHandler}
                 type="text"
                 className='input-control'
                 value={price}
                  />
            </div>
            <div className='new-game-actions'>
                <button onClick={ResetImputHandler} className='form-btn'>Cancelar</button>
                <button disabled={!formValid} onClick={addGameHandler} className='form-btn'>Agregar</button>
            </div>
        </div>
        )}
    </div>
  );
};
export default Gamesform