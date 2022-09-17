import React, { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const { id } = useParams();

    

    //Gestionar la obtención de la data del detalle

    useEffect(()=> {

       

    

            (async ()=> {

            const obtenerProductos = new Promise ((accept, reject)=> {

                setTimeout(()=> {

                  accept(products)

                }, 0);

              })

              

        

                try {

                  const productos = await obtenerProductos;

                  setProductDetail(productos.find((item)=> item.id === Number(id )));

                } catch (error) {

                 

                }

        

              })()

        

         



    }, [id])



   



    return <ItemDetail product={productDetail}/>;

};



export default ItemDetailContainer;

