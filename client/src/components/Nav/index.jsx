import React from 'react'
import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {

  return (    
    <div className="navbar">
      <nav>
        <ul className="lista">
          <li className="items">
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/properties'}>Propiedades</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>                        
          </li>

          <div className="div-botones">

            <NavLink to={'/login'}>
              <button className='btn-nav'>Login</button>
            </NavLink>
            <NavLink to={'/login'}>
              <button className='btn-nav'>Sing In</button>
            </NavLink>
            <NavLink to={'/login'}>
              <button className='btn-nav'>Log Out</button>
            </NavLink>

          </div>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav