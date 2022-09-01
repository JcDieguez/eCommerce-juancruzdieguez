import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const ItemListConteiner = ({ greeting }) => {

    const agregarAlCarrito = (cantidad) => {

        console.log(cantidad);
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />
        </div>
    )
}


export default ItemListConteiner