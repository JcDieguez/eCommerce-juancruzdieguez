import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Item = ({ product }) => {
  const navegar = useNavigate();



  return (
    <div className="container d-flex justify-content-center mt-50 mb-50">

      <div className="row">


          <div className="card card-body">
            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0">

              <img onClick={()=> navegar(`/detalle/${product.id}`)} src={product.img}  width="150" height="150" alt="" />

              </div>

              <div className="media-body">
                <h6 className="media-title font-weight-semibold">
                  <p>{product.name}</p>
                </h6>

                <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                  <li className="list-inline-item">Bateria: {product.bateria}</li>
                </ul>

                <p className="mb-3">{product.description}</p>
              </div>

              <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                <h3 className="mb-0 font-weight-semibold">${product.price}</h3>

                <div>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                </div>

                <div className="text-muted">stock: {product.stock}</div>

                <button type="button" className="btn btn-warning mt-4 text-white" onClick={()=> navegar(`/detalle/${product.id}`)}><i className="icon-cart-add mr-2"></i>Ver Mas</button>
              </div>
            </div>
        





        </div>
      </div>
    </div>

  )
}

export default Item