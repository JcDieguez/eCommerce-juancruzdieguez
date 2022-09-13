import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.title}</h1>
        <img style={{width: "200px"}} src={product.image} alt="Avatar"/> 
        <h2>El precio es: {product.price}</h2>
        <p>{product.description}</p>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail