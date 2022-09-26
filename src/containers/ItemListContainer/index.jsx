import React, { useEffect, useState } from 'react';
import './style.css';
// import { products } from '../../data/products';
import ItemList from '../../Components/ItemList'
import { useParams } from 'react-router-dom';

import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

  console.log(db);

  const [productos, setProductos] = useState([])
  const { tipocategoria } = useParams();

  useEffect(() => {
    (async () => {
        try {

            //Ajustamos la query según el param que viene desde la navegación
            const q = tipocategoria
                ? query(
                      collection(db, "products"),
                      where("category", "==", tipocategoria)
                  )
                : query(collection(db, "products"));

            //2do realizar el llamado a firebase
            const querySnapshot = await getDocs(q);
            const productosFirebase = [];
            //3ero obtener el "snapshot" con los datos crudos.
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                productosFirebase.push({ id: doc.id, ...doc.data() });
            });
            console.log(productosFirebase);
            setProductos(productosFirebase);

            //   const response = await fetch(
            //     "https://fakestoreapi.com/products/category/" + categoryId
            // );
            // const productos = await response.json();
            // setProductos(productos);
        } catch (error) {
            console.log(error);
        }
    })();
}, [tipocategoria]);


  return (
    <div className='item-list-container'>
      <ItemList products={productos} />
    </div>
  )
}

export default ItemListContainer;