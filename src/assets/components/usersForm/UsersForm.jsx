import React, {useState} from 'react'
import CreateUser from '../ABM-Users/CreateUser'
import UpdateUser from '../ABM-Users/UpdateUser'
import DeleteUser from '../ABM-Users/DeleteUser'

const UsersForm = () => {
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
        <button onClick={handleCreateClick}>Crear usuario</button>
        <button onClick={handleUpdateClick}>Editar usuario</button>
        <button onClick={handleDeleteClick}>Eliminar usuario</button>
        {createActivated && 
        <CreateUser />
        }
        {updateActivated && <UpdateUser />}
        {deleteActivated && <DeleteUser/>}
    </div>
  )
}

export default UsersForm