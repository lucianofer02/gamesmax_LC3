import React from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogoutInDashboard = () => {
        navigate("/home")
    }
    return (
        <div>
            <h1>Bienvenido a Gamesmax!</h1>
            <button onClick={handleLogoutInDashboard}>Ingresar </button>
        </div>
    )
}

export default Login;