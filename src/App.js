import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {



  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/>
    </>
  );
}

export default App;
