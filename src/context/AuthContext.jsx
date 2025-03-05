import { createContext, useContext, useState } from "react";

// crea el context
const AuthContext = createContext();

// proovedor del context
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
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
