import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const BasketPage = () => {

  const { basket, increaseBasket, decreaseBasket, deleteBasket } = useContext(BasketContext)


  return (
    <>
  {
   basket && basket.map(product=>(
    <div key={product._id} className='card col-lg-4'>
      <h2>{product.title}</h2>
      <h3>{product.marka}</h3>
      <p>{product.price}$</p>
      <div className='d-flex count'>
        <button onClick={() => increaseBasket(product)}>+</button>
        <div>{product.count}</div>
        <button onClick={() => decreaseBasket(product)}>-</button>

      </div>
      <button onClick={() => deleteBasket(product)}>delete</button>
    </div>
   )
    
      )
    
  }  

   </>
  )
}

export default BasketPage