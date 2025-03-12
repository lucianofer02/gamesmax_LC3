import React from 'react'
import './GameFilter.css'

const GameFilter = ({onGenreChange, genreSelected}) => {
    const changeGenreHandler = (event) => {
        onGenreChange(event.target.value);
    };
  return (
    <div>
        <div className='games-filter'>
            <div className='games-filter-control'>
                <select onChange={changeGenreHandler} value={genreSelected}>
                    <option  value="">Género</option>
                    <option value="Aventura">Aventura</option>
                    <option value="RPG">RPG</option>
                    <option value="FPS">FPS</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Plataformas">Plataformas</option>
                </select>
            </div>
        </div>
    </div>
  );
};

export default GameFilter;