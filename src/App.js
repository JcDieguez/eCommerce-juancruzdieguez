import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound';
import Cart from './containers/CartContainer';
import ShopProvedor from './context/ShopProvedor';

function App() {



  return (
    <ShopProvedor>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/productos" element={<ItemListContainer/>}/>
      <Route path="/category/:tipocategoria" element={<ItemListContainer/>}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>  
    </Routes>
    </BrowserRouter>
    </ShopProvedor>
  );
}

export default App;
