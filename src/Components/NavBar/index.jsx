import React from 'react'
import CartWidget from '../CartWidget';
import './style.css';
import { Link } from 'react-router-dom';


const NavBar = () => {


    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#">E-Commerce</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/category"></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </Link>
                            <ul class="dropdown-menu">

                                <li><Link class="dropdown-item" to="/category/hamburguesa">Hamburguesas</Link></li>

                                <li><Link class="dropdown-item" to="/category/pizza">Pizzas</Link></li>

                                <li><Link class="dropdown-item" to="/category/bebidas">Bebidas</Link></li>

                                <li><Link class="dropdown-item" to="/productos">Todos los productos</Link></li>

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