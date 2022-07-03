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
            <StyledLink to={'/home'}>Ver Propiedades</StyledLink>
            <StyledLink to={'/about'}>Acerca de </StyledLink>
            <StyledLink to={'/contact'}>Contacto</StyledLink>
            {/*rutas provisorias para ver los componentes */}
            <NavLink to={'/favoritos'}>favoritos</NavLink>
            <NavLink to={'/mipropsvip'}>mipropsvip</NavLink>
            <NavLink to={'/planes'}>planes</NavLink>
            <NavLink to={'/calendaryCards'}>CalendaryCards</NavLink>
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
    </div>
  )
}

export default Nav;