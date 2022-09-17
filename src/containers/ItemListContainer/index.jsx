import React, { useEffect, useState } from 'react';
import './style.css';
import {products} from '../../data/products';
import ItemList from '../../Components/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const { tipocategoria } = useParams();

  //La promise se ejecuta una única vez cuando se monta el componente
  useEffect(()=> {
    
    (async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 0);
      })

        try {

          if (!tipocategoria){
            const productos = await obtenerProductos;
            setProductos(productos);
          }
          
          else{
            const productos = await obtenerProductos;
            setProductos(productos.filter((prod)=> prod.category === tipocategoria));

          }
        } catch (error) {
         
        }

      })()

  }, [tipocategoria])


  return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;