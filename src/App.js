import './App.css';
import NavBar from './Components/NavBar';
import ItemCount from './Components/ItemCount';
import ItemListConteiner from './Components/ItemListConteiner';

function App() {



  return (
    <>
    <NavBar/>
    <ItemCount/>
    <ItemListConteiner greeting={"hamburguesa triple xxl"}/>
    </>
  );
}

export default App;
