import React, {useState} from 'react';
import './GamesForm.css'
import CreateGame from '../ABM-Games/CreateGame';
import UpdateGame from '../ABM-Games/UpdateGame';
import DeleteGame from '../ABM-Games/DeleteGame';
const Gamesform = () => {
    const [createActivated, setCreateActivated] = useState(false);
    const [updateActivated, setUpdateActivated] = useState(false);
    const [deleteActivated, setDeleteActivated] = useState(false);

    const handleCreateClick = () => {
        setCreateActivated(true);
        setUpdateActivated(false);
        setDeleteActivated(false);
    }

    const handleUpdateClick = () => {
        setUpdateActivated(true);
        setCreateActivated(false);
        setDeleteActivated(false);
    }

    const handleDeleteClick = () => {
      setDeleteActivated(true);
      setCreateActivated(false);
      setUpdateActivated(false);
    }

  return (
<div>
        <button onClick={handleCreateClick}>Crear juego</button>
        <button onClick={handleUpdateClick}>Editar juego</button>
        <button onClick={handleDeleteClick}>Eliminar juego</button>
        {createActivated && 
        <CreateGame />
        }
        {updateActivated && <UpdateGame />}
        {deleteActivated && <DeleteGame />}
    </div>
  );
}
  export default Gamesform;
