import React, { useState } from 'react'
import './style.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    const handleAdd = () => {
        if (count < stock) {
            setCount(count+1)
        } else{
            alert("No hay suficiente stock disponible")
        }
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default ItemCount;