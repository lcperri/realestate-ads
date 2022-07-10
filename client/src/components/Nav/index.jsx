import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../../styledComponents/Button';
import { StyledHash, StyledLink } from '../../styledComponents/StyledLink';
import './Nav.css';
import { useLocation } from 'react-router-dom';
import capitalize from './../../functions/capitalize';
import { useDispatch } from 'react-redux/es/exports';
import { logout } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Logo from '../../dumb/Icons/Logo';
import Title from '../../styledComponents/Title'
import { useSelector } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //Este es un cambio para forzar un renderizado cuando se cambia nombre o apellido en Perfil
  var [ChangeInNavBarName, setChangeInNavBarName] = useState("")
  let userData = useSelector((state) => state.userById);

  useEffect(() => {
    setChangeInNavBarName(userData)
  }, [userData]);

  //************************ */

  const range = localStorage.getItem('range');
  const id = localStorage.getItem('id');
  var name = localStorage.getItem('name');
  var lastName = localStorage.getItem('last-name');

  if (name) {
    name = capitalize(name);
    lastName = capitalize(lastName);
  }

  const logoutFunction = (e) => {
    e.preventDefault();
    dispatch(logout(id));
    navigate('/');
  }

  return (
    <div className="navbar">
      <div className='subContainerLeft'>
        <StyledLink to='/'>
          <Logo height='20px' width='20px' />
        </StyledLink>
      </div>
      <div className='subContainerCenter'>
        <li className="items">
          {!location.pathname.split('/')[1] ?
            <>
              <StyledHash to={'#'}>Inicio</StyledHash>
              <StyledHash to="#how-it-works">Cómo funciona </StyledHash>
              <StyledHash to="#agents">Quiénes somos</StyledHash>
            </>
            :
            <>
              {range && range !== 'free' && <NavLink to={'/mispropiedades'}>Mis Propiedades</NavLink>}
              {range && <NavLink to={'/favoritos'}>Mis Favoritos</NavLink>}
              {range && <NavLink to={'/calendario'}>Calendario</NavLink>}
            </>
          }
        </li>
        <StyledLink to={'/home'}>
          <Button>Ver Propiedades</Button>
        </StyledLink>
        {range && range !== 'free' &&
          <StyledLink to={'/publicar'}>
            <Button>Publicar</Button>
          </StyledLink>
        }
      </div>
      <div className='subContainerRight'>
        {!range &&
          <div>
            {
              location.pathname.split('/')[1] !== 'sesion' &&
              <StyledLink to={'/sesion'}>
                <Button>Iniciar Sesión</Button>
              </StyledLink>
            }
            {
              location.pathname.split('/')[1] !== 'registro' &&
              <StyledLink to={'/registro'}>
                <Button>Registrarse</Button>
              </StyledLink>
            }
          </div>
        }
        {range &&
          <div>
            <Title fontSize='20px' color='#ff765e'>
              {capitalize(range)},
            </Title>
            <Title fontSize='20px'>
              ¡Hola, {name} {lastName}!
            </Title>
            {range && <StyledLink to={'/planes'} className='perfil'>Subscripción</StyledLink>}
            {range && <StyledLink to={'/perfil'} className='perfil'>Perfil</StyledLink>}
            <Button onClick={(e) => { logoutFunction(e) }}>Cerrar Sesión</Button>
          </div>
        }
      </div>
    </div >
  )
}

export default Nav;