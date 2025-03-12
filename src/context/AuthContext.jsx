import { createContext, useContext, useState, useEffect } from "react";

// crea el context
const AuthContext = createContext();

// proovedor del context
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Obtener la lista de usuarios desde el json-server o API
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users"); // Asegúrate de que esta URL sea la correcta
        const data = await response.json();
        setUsers(data); // Guardar los usuarios en el estado
      } catch (error) {
        console.error("Error al obtener usuarios", error);
      }
    };

    fetchUsers();
  }, []); // Esto se ejecuta solo una vez cuando el componente se monta

  const login = (userData) => {
    // Aquí puedes buscar al usuario por su nombre de usuario, correo, etc.
    const userFound = users.find((u) => u.username === userData.username);
    if (userFound) {
      setUser(userData); // Establecer el usuario encontrado en el estado
    } else {
      console.log("Usuario no encontrado");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook para acceder al context de manera mas rapida y eficaz
export function useAuth() {
  return useContext(AuthContext);
}

// exporta el context
export default AuthContext;
