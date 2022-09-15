import React from 'react'
import ItemCount from '../ItemCount'
import { useNavigate } from 'react-router-dom'



const ItemDetail = ({ product }) => {
  const retroceder = useNavigate();

  return (

    <div>

      <h1>{product.name}</h1>

      <img style={{ width: "200px" }} src={product.img} alt="Avatar" />

      <h2>stock unidades: {product.stock}</h2>

      <p>{product.description}</p>

      <ItemCount stock={product.stock} initial={1} />
      
      <button className='btn btn-info' onClick={()=> retroceder('/productos')}>Retroceder</button>

    </div>

  )

}



export default ItemDetail