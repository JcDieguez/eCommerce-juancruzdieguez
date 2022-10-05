import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvedor';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ordenGenerada from "../../services/ordenGenerada";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";


const Cart = () => {

  const { cart, removeItem, clearCart, total } = useContext(Shop);

  const renderImage = (image) => {
    return (
      <img src={image.value} alt="cart-product" style={{ height: '120px' }}></img>
    )
  }

  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <Button onClick={() => removeItem(product)} variant="contained" color="error">
        Eliminar
      </Button>
    )
  }

  const handleBuy = async () => {
    const totalcarrito = total();
    const orden = ordenGenerada("Juan Cruz", "jc@dieguez.com", "12313213", cart, totalcarrito);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), orden);



    // actualizamos el stock del producto despues de generar la compra.
    cart.forEach(async (productoEnCarrito) => {

      //Accedemos a la referencia del produc
      const productoRef = doc(db, "products", productoEnCarrito.id);


      //Llamamos al snapshot llamando a firebase
      const productoSnap = await getDoc(productoRef)

      //en snapshot.data nos devuelve la info del doc a actualizar

      await updateDoc(productoRef,

        { stock: productoSnap.data().stock - productoEnCarrito.quantity, });

    })

    clearCart()

    alert(

      `Gracias por su compra! La orgen generada con ID: ${docRef.id}`

    );

  }



  const columns = [
    { field: 'image', headerName: 'Imagen', width: 250, renderCell: renderImage },
    { field: 'title', headerName: 'Producto', width: 450 },
    { field: 'quantity', headerName: 'Cantidad', width: 80 },
    { field: 'price', headerName: 'Precio', width: 80 },
    {
      field: 'remove',
      headerName: 'Eliminar',
      renderCell: renderRemoveButton,
      width: 120,
    },
  ];

  //Vamos a asignar un array con cada fila de la tabla, utilizando el cart
  const filas = []
  cart.forEach(item => {
    filas.push({
      id: item.id,
      image: item.img,
      title: item.name,
      quantity: item.quantity,
      price: item.price,
      remove: item,
    })
  })

  return (
    <>
      {!cart.length
        ? <div>Carrito vacio</div>
        : <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filas}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            rowHeight={150}
          />
          <p>Total a Pagar :  {total()} </p>
          <Button onClick={clearCart} color="error" variant="outlined">Vaciar productos</Button>
          <button onClick={handleBuy}>Confirmar compra</button>
        </div>}
    </>
  );
}

export default Cart;