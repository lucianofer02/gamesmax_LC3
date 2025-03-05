import React from "react";
import {useState, useContext} from "react";
import AuthContext from "../../../context/AuthContext";
import users from "../../../data/usersData";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => { // Define username, password y error
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => { // Se utiliza la auth
      e.preventDefault();
      const user = users.find((u) => u.username === username && u.password === password); // el sistema busca al usuario en users
      if (user) {
        login(user.username, user.role);
        navigate("/home"); // si el usuario y la contraseña son correctos, navega a la pestaña home
      } else {
        setError("Usuario o contraseña incorrectos"); // de lo contrario, muestra mensaje de error al iniciar sesion.
      }
    };
  
    return ( // formulario de inicio de sesion
      <div className="login-container">
        <div className="login-box">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
        </div>
      </div>
    );
  };

export default Login;