import React from 'react'
import { NavLink} from 'react-router-dom';
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
            <StyledLink to={'/about'}>Acerca de </StyledLink>
            <StyledLink to={'/contact'}>Contacto</StyledLink>
            {/*rutas provisorias para ver los componentes */}
            <NavLink to={'/favoritos'}>Mis favoritos</NavLink>
            <NavLink to={'/mipropsvip'}>Mis propiedades</NavLink>
            <NavLink to={'/planes'}>Planes</NavLink>
            <NavLink to={'/calendaryCards'}>Calendario de visitas</NavLink>
            <StyledLink to={'/home'}>Ver Propiedades</StyledLink>
          </li>
        </div>
        <div className='subContainerRight'>
          <StyledLink  to={'/signup'}>
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
    </div>
  )
}

export default Nav;