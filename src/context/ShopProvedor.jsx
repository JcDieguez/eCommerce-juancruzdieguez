import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

//Declaramos el context
export const Shop = createContext(null);

//Paso dos, crear el provedor que me va a envolver a la aplicacion

const ShopProvedor = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addItem = (item) => {
        const productoRepetido = isInCart(item.id);
        
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

    const removeItem = (itemToRemove) => {
        const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
    }

    const clearCart = () => {
        setCart([]);
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity,0)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)
    }

    return (
        <Shop.Provider value={{cart, addItem, isInCart, removeItem, clearCart, cartQuantity, total}}>
            {children}
        </Shop.Provider>
    )
}


export const useCart = () => useContext(Shop)

export default ShopProvedor;