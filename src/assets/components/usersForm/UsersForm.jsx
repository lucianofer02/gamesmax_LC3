import React, {useState} from 'react'
import CreateUser from '../ABM-Users/CreateUser'
import UpdateUser from '../ABM-Users/UpdateUser'

const UsersForm = () => {
    const [createActivated, setCreateActivated] = useState(false);
    const [updateActivated, setUpdateActivated] = useState(false);

    const handleCreateClick = () => {
        setCreateActivated(true);
        setUpdateActivated(false);
    }

    const handleUpdateClick = () => {
        setUpdateActivated(true);
        setCreateActivated(false);
    }
  return (
    <div>
        <button onClick={handleCreateClick}>Crear usuario</button>
        <button onClick={handleUpdateClick}>Editar usuario</button>
        {createActivated && 
        <CreateUser />
        }
        {updateActivated && <UpdateUser />}
    </div>
  )
}

export default UsersForm