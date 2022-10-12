import React from 'react';
import './style.css';
import { HiShoppingCart } from 'react-icons/hi';
import { useCart } from '../../context/ShopProvedor';
import { NavLink } from 'react-router-dom';


const CartWidget = () => {

    const{cartQuantity} = useCart()

    return (
        <div style={{
            width: '30px'
        }}>
            {}
              <NavLink  to="/cart"  className='iconcart'> <HiShoppingCart fontSize='40px'/> <span>{cartQuantity() || '' }</span></NavLink>
        </div>
    )
}

export default CartWidget