import React, {useState, useEffect} from 'react'
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

import {useSelector } from "react-redux";


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
    dispatch(logout());
    navigate('/home');
  }

  return (

    <div className="navbar">
      <StyledLink to='/'>
        <Logo height='20px' width='20px' />
      </StyledLink>
      <div className='subContainer'>
        <StyledLink to={'/home'}>
          <Button>Ver Propiedades</Button>
        </StyledLink>
        <div className='subContainerLeft'>
          <li className="items">
            {!location.pathname.split('/')[1] ?
              <>
                <StyledHash to={'#'}>Inicio</StyledHash>
                <StyledHash to="#how-it-works">Cómo funciona </StyledHash>
                <StyledHash to="#agents">Quiénes somos</StyledHash>
              </>
              :
              <>
                {range && <StyledLink to={'/perfil'}>Perfil</StyledLink>}
                {range && <NavLink to={'/favoritos'}>Mis Favoritos</NavLink>}
                {range && range !== 'free' && <NavLink to={'/mispropiedades'}>Mis Propiedades</NavLink>}
                {range && <NavLink to={'/planes'}>Planes</NavLink>}
                {range && <NavLink to={'/calendario'}>Calendario</NavLink>}
              </>
            }
          </li>
        </div>
      </div>
      <div className='subContainerRight'>
        {!range &&
          <>
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
          </>
        }
        {range &&
          <>
            <h1>¡Hola, {name} {lastName}!</h1>
            <Button onClick={(e) => { logoutFunction(e) }}>Cerrar Sesión</Button>
          </>
        }
        {range && range !== 'free' &&
          <StyledLink to={'/publicar'}>
            <Button>Publicar</Button>
          </StyledLink>
        }
      </div>
    </div>
  )
}

export default Nav;