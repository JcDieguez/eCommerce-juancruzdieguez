import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {



  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
