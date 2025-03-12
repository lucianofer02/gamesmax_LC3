import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import AuthContext from '../../../context/AuthContext';

const DeleteUser = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    // Obtiene la lista de juegos y actualiza el estado de la misma
    const fetchUsers = () => {
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error al cargar los usuarios:", error));
    };

    // Se utiliza cuando se ejecuta el componente para mostrar la lista de juegos
    useEffect(() => {
        fetchUsers();
    }, []);

    // Maneja el borrado de un juego verificando el rol del usuario y preguntando si desea borrar el juego seleccionado
    const handleDelete = () => {
        if (!user || user.role !== 'superadmin') {
            alert("No tienes permiso para eliminar usuarios.");
            return;
        }
        if (!selectedUser) {
            alert("Selecciona un usuario para eliminar.");
            return;
        }
        if (!window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;
        
        // Se realiza la solicitud Delete para eliminar el juego seleccionado
        fetch(`http://localhost:3001/users/${selectedUser}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log("Estado del servidor:", response.status);
            return response.text();
        })
        .then(data => {
            console.log("Respuesta del servidor:", data);
            fetchUsers(); // Actualiza la lista de juegos después de eliminar
            setUsers(users.filter(user => user.id !== selectedUser)); // Una vez eliminado el juego, la lista se actualiza localmente
            setSelectedUser('');
            alert("Usuario eliminado correctamente.");
        })
        .catch(error => console.error("Error al eliminar el usuario:", error));
    };

    // El componente se renderiza solo si el usuario posee el rol superadmin
    return (
        <div>
            {user?.role === 'superadmin' && (
                <>
                    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                        <option value="">Selecciona un usuario</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.username}</option>
                        ))}
                    </select>
                    <button onClick={handleDelete} disabled={!selectedUser} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
                        Eliminar
                    </button>
                </>
            )}
        </div>
    );
};


export default DeleteUser;
