import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvedor';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const Cart = () => {

  const {cart, removeItem, clearCart} = useContext(Shop);

  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
    )
  }

  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <Button onClick={()=> removeItem(product)} variant="contained" color="error">
        Eliminar
      </Button>
    )
  }

  const columns = [
    { field: 'image', headerName: 'Imagen', width: 250, renderCell: renderImage},
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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowHeight={'150px'}
      />
      <Button onClick={clearCart} color="error" variant="outlined">Vaciar productos</Button>
    </div>
  );
}

export default Cart;