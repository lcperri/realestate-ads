import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../../styledComponents/Button';
import './Nav.css';

const Nav = () => {

  return (
    <div className="navbar">
      <nav>
        <ul className="lista">
          <li className="items">
            <NavLink to={'/home'}>Inicio</NavLink>
            <NavLink to={'/properties'}>Propiedades</NavLink>

            <NavLink to={'/about'}>Acerca de </NavLink>
            <NavLink to={'/contact'}>Contacto</NavLink>
          </li>

          <div className="div-botones">
            <li className="items">
              <NavLink to={'/sigin'}>
                Registrarse
              </NavLink>
            </li>
            <NavLink to={'/login'}>
              <Button>Login </Button>
            </NavLink>
            <NavLink to={'/create'}>
              <Button> Publicar Propiedad </Button>
            </NavLink>
          </div>
        </ul>
      </nav>
    </div>

  )
}

export default Nav