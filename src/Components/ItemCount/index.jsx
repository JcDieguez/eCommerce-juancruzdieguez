import React, {useState, useEffect} from "react";
import './style.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        if(count > 1){
            setCount(count -1);
    } else{
        alert("No puedes restar la unidad");
    }
}

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    //Montaje del componente
    useEffect(()=> {
        //El array de dependencias vacío implica que el callback se ejecutará cuando se MONTA el componente por UNICA vez.
        console.log("Se montó el ItemCount");
    }, []);

    //La función callback dentro del useEffect se ejecutará cuando se MONTE el componente, y cuando se ACTUALICE el valor del count
    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);

    return (
    <div className='item-botones'>
        <button className='botonesprimarioresta' onClick={handleDecrement}>-</button>
        <button className='botonesprimariosuma' onClick={handleAdd}>+</button>
        <h2 className='h2'>{count}</h2>

        <button className='botoncarrito' onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;