import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import { useNavigate } from 'react-router-dom'
import './style.css';
import { useContext } from 'react';
import {Shop} from "../../context/ShopProvedor"


const ItemDetail = ({ product }) => {
  const retroceder = useNavigate();
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const [qty, setQty] = useState(0);
  const addCart = (quantity) => {
    setQty(quantity);
  }
  const handleFinish = () =>{
      const productSave = {...product, quantity: qty}
      addItem(productSave)
      navigate('/cart');
  }



  return (

    <div>

      <h1>{product.name}</h1>

      <img style={{ width: "200px" }} src={product.img} alt="Avatar" />

      <h2>Precio: {product.price}</h2>
      <h3>cantidad: {product.stock}</h3>

      <p>{product.description}</p>

      {qty ? (
        <button className='buttonFinish'  onClick={handleFinish}>Finalizar compra</button>) : (
        <ItemCount stock={product.stock} initial={1} onAdd={addCart} />)}

      <button className='btn btn-info' onClick={() => retroceder('/productos')}>Retroceder</button>

    </div>

  )

}



export default ItemDetail