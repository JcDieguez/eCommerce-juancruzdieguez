import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

//Declaramos el context
export const Shop = createContext(null);

//Paso dos, crear el provedor que me va a envolver a la aplicacion

const ShopProvedor = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addItem = (item) => {
        const productoRepetido = isInCart(item.id);
        console.log(productoRepetido);
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else{
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <Shop.Provider value={{cart, addItem, isInCart, removeItem, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvedor;