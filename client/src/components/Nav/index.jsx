import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Button from '../../styledComponents/Button';
import { StyledLink } from '../../styledComponents/StyledLink';
import './Nav.css';

const Nav = () => {
  return (
    <div className="navbar">
      {/* <ul className="lista"> */}
      <div className='subContainer'>
        <div className='subContainerLeft'>
          <li className="items">
            <StyledLink to={'/'}>Inicio</StyledLink>
            <StyledLink to={'/home'}>Ver Propiedades</StyledLink>
            <StyledLink to={'/about'}>Acerca de </StyledLink>
            <StyledLink to={'/contact'}>Contacto</StyledLink>
          </li>
        </div>
        <div className='subContainerRight'>
          <StyledLink  to={'/sigin'}>
            Registrarse
          </StyledLink>
          <StyledLink to={'/login'}>
            <Button>Login </Button>
          </StyledLink>
          <StyledLink to={'/create'}>
            <Button> Publicar </Button>
          </StyledLink>
        </div>
      </div>


      {/* </li> */}
      {/* </ul> */}
    </div>


  )
}

export default Nav


{/* <div className="navbar">
      <nav>
        <ul className="lista">
          <li className="items">
            <NavLink to={'/'}>Inicio</NavLink>
            <NavLink to={'/home'}>Propiedades</NavLink>

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
    </div> */}
