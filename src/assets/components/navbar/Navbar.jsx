import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const[toggleIcon, setToggleIcon] = useState("nav__toggler");
    const { user, logout } = useAuth();

    const navToggle = () => {
        active === 'nav__menu'
         ? setActive('nav__menu nav__active')
         : setActive('nav__menu');

         // TogglerIcon

         toggleIcon === 'nav__toggler'
         ? setToggleIcon('nav__toggler toggle')
         : setToggleIcon('nav__toggler');
    };

    const handleLogout = () => {
        logout();
    };

    if (!user) {
        return null;
    }

  return (
    <nav className="nav">
        <Link to="/home" className='nav__brand'>GAMESMAX</Link>
        <ul className={active}>
        {/* <li className="nav__item"><Link to="/home">Home</Link></li> */}

            {user.role === 'superadmin' && (
                <>
                <li className="nav__item"><Link to={"/usersform"}>ABM Usuarios</Link></li>
                <li><Link to="/gamesform">ABM Juegos</Link></li>
                </>
            )}

            {user.role === 'admin' && (
                <>
                <li><Link to="/gamesform">ABM Juegos</Link></li>
                </>
            )} 
            <li className="nav__item"><Link to="/nosotros">Nosotros</Link></li>
            <li className="nav__item"><Link to={"/login"} onClick={handleLogout}>Cerrar Sesion</Link></li>
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