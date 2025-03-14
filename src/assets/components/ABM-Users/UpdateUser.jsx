import React, {useEffect, useState} from 'react'
import './ABMUsers.css'

const UpdateUser = () => {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState('');
    const [userUpdated, setUserUpdated] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);
    const [formData, setFormData] = useState({}); 
    const existingUser = users.find((user) => user.id === id);



    // Get de todos los usuarios
    useEffect(() => {
        fetch("http://localhost:3001/users") 
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error("Error al cargar los usuarios:", error));
      }, []);

    const handleEditClick = (user) => {
            setEditingUserId(user.id);
            setFormData({ ...formData, [user.id]: { ...user } });
          };

      const handleInputChange = (id, field, value) => {
        setFormData((prev) => ({
          ...prev,
          [id]: { ...prev[id], [field]: value },
        }));
      };

      const handleSaveClick = (id) => {
        const updatedUser = {
            ...formData[id], 
          };

        fetch(`http://localhost:3001/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
        .then(response => response.json())
        .then(userUpdated => {
            setUsers(users.map(user => user.id === id ? userUpdated : user));
            setUserUpdated(true);
            setEditingUserId(null);
          })
          .catch((error) => console.error("Error en el PUT:", error));      
        };

      const handleCancelClick = () => {
        setEditingUserId(null);
      };

  return (
    <div>
        {users.map((user) => (
            <div key={user.id} className='usercard'>
                        <p>Username: {user.username}</p>
                {editingUserId === user.id && (
                    <div className='editForm'>
                        <input type="text" value={formData[user.id]?.username} onChange={(e)=>handleInputChange(user.id, "username", e.target.value)} placeholder='username'/>
                        <input type="text" value={formData[user.id]?.password} onChange={(e)=>handleInputChange(user.id, "password", e.target.value)} placeholder='password'/>
                        <input type="text" value={formData[user.id]?.email} onChange={(e)=>handleInputChange(user.id, "email", e.target.value)} placeholder='email'/>
                        <input type="text" value={formData[user.id]?.role} onChange={(e)=>handleInputChange(user.id, "role", e.target.value)} placeholder='role'/>
                        <button onClick={() => handleSaveClick(user.id)}>Guardar</button>
                        <button onClick={handleCancelClick}>Cancelar</button>
                    </div>
                )}
                {editingUserId !== user.id && (
                <button onClick={() => handleEditClick(user)}>Editar</button>
                )}
            </div>
        ))}
    </div>
  )
}

export default UpdateUser