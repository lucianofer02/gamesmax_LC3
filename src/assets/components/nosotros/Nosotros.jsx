import React from 'react'
import Navbar from '../navbar/Navbar'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <div>
        <h1>Nosotros</h1>
        <div className='nosotros_cards'>
            <div className='nosotros_card'>
                <h1>Patricio Gazzera</h1>
                <h3>Legajo: 50.594</h3>
                <h3>patriciogazzera7@gmail.com</h3>
            </div>
            <div className='nosotros_card'>
                <h1>Luciano Fernández</h1>
                <h3>Legajo: 50.569</h3>
                <h3>lucianofernandez122@gmail.com</h3>
            </div>
        </div>
    </div>
  )
}

export default Nosotros