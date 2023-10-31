import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();

    const backToHomePageHandler = () =>{
        navigate("/login")
    };
  return (
    <div>
        <h2>error 404</h2>
        <button onClick={backToHomePageHandler}>Volver a iniciar sesion</button>
    </div>
  )
}

export default PageNotFound;