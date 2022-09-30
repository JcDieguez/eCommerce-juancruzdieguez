import React from 'react';
import './style.css';
import ItemList from '../../Components/ItemList'
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const ItemListContainer = () => {

  const { tipocategoria } = useParams();
  const [loading, productos, error] = useFirebase(tipocategoria)
  
  return (

    <>
  {loading ? <h2>loading ...</h2> : 
  <ItemList products={productos} />}
  {error && <h2>{error}</h2>}
    </>
  )
  
};

export default ItemListContainer;