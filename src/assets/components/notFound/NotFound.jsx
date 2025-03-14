import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1>Parece que la pagina que querés acceder no existe</h1>
        <h2 style={{padding: "10px"}}>Volver a <Link to="/home">home</Link></h2>
    </div>
  )
}

export default PageNotFound;