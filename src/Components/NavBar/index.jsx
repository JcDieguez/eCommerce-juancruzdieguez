import React from 'react'
import CartWidget from '../CartWidget';
import './style.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/ShopProvedor';



const NavBar = () => {

    const {cart} = useCart()
    console.log(cart)
    

    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">AppleStore</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </Link>
                            <ul className="dropdown-menu">

                                <li><Link className="dropdown-item" to="/category/iphonenew">Nuevos</Link></li>

                                <li><Link className="dropdown-item" to="/category/iphone">Usados</Link></li>

                                <li><Link className="dropdown-item" to="/category/relojes">Apple Watch</Link></li>

                                <li><Link className="dropdown-item" to="/productos">Todos los productos</Link></li>

                            </ul>
                        </li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;