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

      <main class="containerdetail">
 <div class="left-column">
   <img data-image="black" src={product.img} alt=""/>
   <img data-image="blue" src="images/blue.png" alt=""/>
   <img data-image="red" class="active" src={product.img} alt=""/>
 </div>



 <div class="right-column">

   <div class="product-description">
	 <span>{product.category}</span>
	 <h1>{product.name}</h1>
	 <p>{product.description}</p>
   </div>

   <div class="product-configuration">

	 <div class="product-color">
	   <span>Color</span>

	   <div class="color-choose">
		 <div>
		   <input data-image="red" type="radio" id="red" name="color" value="red" checked/>
		   <label for="red"><span></span></label>
		 </div>
		 <div>
		   <input data-image="blue" type="radio" id="blue" name="color" value="blue"/>
		   <label for="blue"><span></span></label>
		 </div>
		 <div>
		   <input data-image="black" type="radio" id="black" name="color" value="black"/>
		   <label for="black"><span></span></label>
		 </div>
	   </div>

	 </div>

	 <div class="cable-config">
	   <span>Almacenamiento</span>

	   <div class="cable-choose">
		 <button>{product.gb}</button>
		 <button>{product.gb1}</button>
		 <button>{product.gb2}</button>
	   </div>

	   <p>Cantidad disponible: {product.stock}</p>
	 </div>
   </div>

   <div class="product-price">
	 <span>${product.price}</span>
	 {qty ? (
        <button className='añadirbtn'  onClick={handleFinish}>Finalizar Compra</button>) : (
        <ItemCount stock={product.stock} initial={1} onAdd={addCart} />)}
		<button className='añadirbtn1' onClick={() => retroceder('/productos')}>Retroceder</button>
   </div>
 </div>
</main>
    </div>

  )

}



export default ItemDetail