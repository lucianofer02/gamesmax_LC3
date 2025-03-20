import { createContext, useContext, useState, useEffect } from "react";

// Crea el contexto
const AuthContext = createContext();

// Proveedor del contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  const login = (userData) => {
    setUser(userData); 
    localStorage.setItem("user", JSON.stringify(userData)); 
  };

  const logout = () => {
    setUser(null); 
    localStorage.removeItem("user");  
  };

  // Carga el usuario desde localStorage cuando la página se recarga
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      fetch(`http://localhost:3001/users/${parsedUser.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data); // Actualiza el usuario con los datos más recientes
        })
        .catch((error) => console.error("Error al sincronizar usuario:", error));
    }
    setIsLoading(false); 
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook para acceder al contexto de manera más fácil
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
