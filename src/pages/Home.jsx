import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const Home = () => {


  return (
    <div className='divhome'>
        <h1 className="titulohome">Bienvenidos a Argentinian Grill</h1>
        <NavLink to="/productos" className='home-button'><img src={logo} alt="Productos" />
        <h4>Todo lo que ofrecemos</h4></NavLink>
    </div>

    
  )
}

export default Home