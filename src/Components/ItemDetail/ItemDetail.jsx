import React from 'react'
import ItemCount from '../ItemCount'




const ItemDetail = ({ product }) => {
  

  return (

    <div>

      <h1>{product.name}</h1>

      <img style={{ width: "200px" }} src={product.img} alt="Avatar" />

      <h2>stock unidades: {product.stock}</h2>

      <p>{product.description}</p>

      <ItemCount stock={product.stock} initial={1} />

    </div>

  )

}



export default ItemDetail