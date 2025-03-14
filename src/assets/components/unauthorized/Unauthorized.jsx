import React from 'react'
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div>
        <h1>UPA! Parece que no deberías estar acá</h1>
        <h2 style={{padding: "10px"}}>Volvé tranqui al <Link to="/home">home</Link></h2>
    </div>
  )
}

export default Unauthorized