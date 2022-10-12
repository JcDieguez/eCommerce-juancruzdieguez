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
     
    }, []);

    //La función callback dentro del useEffect se ejecutará cuando se MONTE el componente, y cuando se ACTUALICE el valor del count
    useEffect(()=> {
     
    }, [count]);

    return (
    <div className='item-botones'>
        <div class="contador">
        <button type="button" class="btn btn-dark-ligth" onClick={handleDecrement}>-</button>
        <h2 className='h2-contador'>{count}</h2>
        <button type="button" class="btn btn-dark-ligth"  onClick={handleAdd}>+</button>
        </div>
        <div class="product-price">
        <button className='añadirbtn1' onClick={addCart}>Seleccionar Unidad</button>
        </div>
    </div>
    );
};

export default ItemCount;