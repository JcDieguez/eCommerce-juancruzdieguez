import React from 'react'
import './style.css'
import Carousel from '../carousel/Carousel';
import { NavLink } from 'react-router-dom';
const Home = () => {


  return (


    <div className='carusel'>
      <Carousel/>
        <NavLink to="/productos" className='home-button'>
        <h4>Todo lo que ofrecemos</h4></NavLink>
    </div>
  )
}

export default Home


