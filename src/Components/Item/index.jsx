import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Item = ({product}) => {
  const navegar = useNavigate();



  return (
    <div className='card-container'>
<img className="card-img" src={product.img} alt="Menu"/> 
    <p className='card-descripcion'>{product.description}</p>
    <button className='btn btn-success' onClick={()=> navegar(`/detalle/${product.id}`)}>Ver Mas</button>
  </div>
    
  )
}

export default Item