import React from 'react'

const Item = ({product}) => {
  return (
    <div class="card">
<img style={{width: "200px"}} src={product.img} alt="Avatar"/> 
    <h4><b>{product.id}</b></h4>
    <p>{product.description}</p>
  </div>
    
  )
}

export default Item