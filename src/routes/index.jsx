import React from 'react'
import NavBar from '../Components/NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';
import Home from '../pages/Home';
import NotFound from '../Components/NotFound';
import Cart from '../containers/CartContainer';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Routing = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/category/:tipocategoria" element={<ItemListContainer />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;