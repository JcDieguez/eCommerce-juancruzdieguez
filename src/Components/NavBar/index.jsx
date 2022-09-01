import React from 'react'
import CartWidget from '../CartWidget';
import './style.css';

function NavBar() {
  return (
    <div>
      <ul>
      <li><a href="#home">Bienvenido</a></li>
      <li><a href="#contact">Contacto</a></li>
      <li><a href="#about">About</a></li>
      <CartWidget/>
    </ul></div>
  )
}

export default NavBar;