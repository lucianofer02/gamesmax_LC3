import React from "react";
import {useState, useEffect} from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => { 
    const { user, login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [users, setUsers] = useState([]); 
  
    // get de usuarios
  useEffect(() => {
          fetch("http://localhost:3001/users", {
            headers: {
              accept: "application/json",
            },
      })
        .then((response) => response.json())
        .then(userData => {
          setUsers(userData);
        })
        .catch((error) => {
          console.log(error);
        });
      }, []);

      // Redirige al usuario a /home si ya está logueado
      useEffect(() => {
        if (user) {
          navigate("/home");
        }
      }, [user, navigate]);

      // manejo de la logica del login
    const handleLogin = (e) => { 
      e.preventDefault();
      try {
      const user = users.find((u) => u.username === username && u.password === password); // el sistema busca al usuario en users
      if (user) {
        login(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home"); // si el usuario y la contraseña son correctos, navega a la pestaña home
      } else {
        setError("Usuario o contraseña incorrectos"); // de lo contrario, muestra mensaje de error al iniciar sesion.
      }
    }
    catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };
  
    return ( 
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