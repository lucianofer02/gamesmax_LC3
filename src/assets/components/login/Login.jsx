import React from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogoutInDashboard = () => {
        navigate("/home")
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogoutInDashboard}>home</button>
        </div>
    )
}

export default Login;