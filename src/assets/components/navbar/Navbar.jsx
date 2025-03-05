import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const[toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === 'nav__menu'
         ? setActive('nav__menu nav__active')
         : setActive('nav__menu');

         // TogglerIcon

         toggleIcon === 'nav__toggler'
         ? setToggleIcon('nav__toggler toggle')
         : setToggleIcon('nav__toggler');
    };

  return (
    <nav className="nav">
        <a href="#" className="nav__brand">
            gamesmax
        </a>
        <ul className={active}>
            <li className="nav__item">
                <Link to="/home">Home</Link>
            </li>
            <li className="nav__item">
                <Link to={"/nosotros"}>Nosotros</Link>
            </li>
            <li className="nav__item">
                <Link to={"/login"}>Cerrar Sesion</Link>
            </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  );
}

export default Navbar;