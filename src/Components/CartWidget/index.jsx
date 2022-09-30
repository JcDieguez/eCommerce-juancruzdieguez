import React from 'react';
import './style.css';
import { HiShoppingCart } from 'react-icons/hi';
import { useCart } from '../../context/ShopProvedor';

const CartWidget = () => {

    const{cartQuantity} = useCart()

    return (
        <div style={{
            width: '30px'
        }}>
            {}
            <HiShoppingCart color='green' fontSize='40px'/> <span>{cartQuantity() || '' }</span>
        </div>
    )
}

export default CartWidget