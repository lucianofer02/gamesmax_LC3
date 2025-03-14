import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import AuthContext from '../../../context/AuthContext';

const DeleteGame = () => {
    const { user } = useContext(AuthContext);
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState('');

    // Obtiene la lista de juegos y actualiza el estado de la misma
    useEffect(() => {
    const fetchGames = () => {
        fetch("http://localhost:3002/games")
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error("Error al cargar los juegos:", error));
    };
    
        fetchGames();
    }, [games]);

    // Maneja el borrado de un juego verificando el rol del usuario y preguntando si desea borrar el juego seleccionado
    const handleDelete = () => {
        // if (!user || user.role !== 'superadmin') {
        //     alert("No tienes permiso para eliminar juegos.");
        //     return;
        // }
        if (!selectedGame) {
            alert("Selecciona un juego para eliminar.");
            return;
        }
        if (!window.confirm("¿Estás seguro de que quieres eliminar este juego?")) return;
        
        // Se realiza la solicitud Delete para eliminar el juego seleccionado
        fetch(`http://localhost:3002/games/${selectedGame}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log("Estado del servidor:", response.status);
            return response.text();
        })
        .then(data => {
            console.log("Respuesta del servidor:", data);
            setGames(games.filter(game => game.id !== selectedGame)); 
            setSelectedGame('');
            alert("Juego eliminado correctamente.");
        })
        .catch(error => console.error("Error al eliminar el juego:", error));
    };


    return (
        <div>
            {(user.role === 'superadmin' ||  user.role === 'admin') && (
                <>
                    <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
                        <option value="">Selecciona un juego</option>
                        {games.map(game => (
                            <option key={game.id} value={game.id}>{game.title}</option>
                        ))}
                    </select>
                    <button onClick={handleDelete} disabled={!selectedGame} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
                        Eliminar
                    </button>
                </>
            )}
        </div>
    );
};


export default DeleteGame;
