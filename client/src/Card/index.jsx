import React, { useContext } from 'react'
import "./index.css"
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'
import { Link } from 'react-router-dom'
const Card = ({ product }) => {
  const {  addBasket } = useContext(BasketContext)
  const {wishlist, addWish } = useContext(WishlistContext)
  console.log(wishlist);
  return (
    <div className='card col-lg-4'>
      <h2><Link to={product._id}>{product.title}</Link></h2>
      <h3>{product.marka}</h3>
      <p>{product.price}$</p>
      
     <button onClick={() => addWish(product)}>wish</button>
      <button onClick={() => addBasket(product)} className='buton-add'>add</button>
    </div>
  )
}

export default Card