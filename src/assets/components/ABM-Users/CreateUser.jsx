import { set } from 'firebase/database';
import React, {useState, useEffect} from 'react'

const CreateUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [proximoId, setProximoId] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("check form");
            const isValid = username !== "" && password !== "" && email !== "" && role !== "";
            setFormValid(isValid);
        }, 100);

        return () => {
            console.log("cleanup")
            clearTimeout(timer);
        }
    }, [username, password, email, role]);

    // Obtiene el ultimo id de la lista de usuarios y le suma 1 para obtener el proximo id
    const obtenerProximoId = async () => {
        try {
          const response = await fetch("http://localhost:3001/users");
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

    // Funcion para agregar un usuario
        const addUserHandler = async () => {
            const newUser = {
                id: String(proximoId), // String() hace que el id este entre comillas, permitiendo la modificacion y eliminacion del usuario
                username,
                password,
                email,
                role,
            }
            try {
                const response = await fetch("http://localhost:3001/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });
                const data = await response.json();
                console.log("Usuario creado:", data);
                setUserCreated(true);
            } catch (error) {
                console.error('Error al crear el usuario:', error);
            }
            ResetImputHandler()
        }

        const ResetImputHandler = () => {
            setUsername("");
            setPassword("");
            setEmail("");
            setRole("");
        }
    
        const changeUserCreated = () => {
            setUserCreated(false);
        }

  return (
    <div>
        <h2>Crear Usuario</h2>
        <form className='userABM'>
            <div >
                <label>Nombre de Usuario</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Role</label>
                <select id="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="" hidden>Seleccione un rol</option>
                    <option value="superadmin">SuperAdmin</option>
                    <option value="admin">Admin</option>
                    <option value="client">Client</option>
                </select>
            </div>

            <button onClick={addUserHandler} disabled={!formValid}>Crear Usuario</button>
            <button onClick={ResetImputHandler}>Reset</button>
        </form>
        {userCreated && 
        <div className='userABM'>
            <h4>Usuario creado correctamente</h4>
            <button onClick={changeUserCreated}>Aceptar</button>
        </div>}
    </div>
  )
}

export default CreateUser