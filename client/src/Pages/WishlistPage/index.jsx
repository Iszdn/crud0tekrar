import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const WishlistPage = () => {

  const {wishlist,deleteWish}= useContext(WishlistContext)

  return (
    <div>
{
  wishlist && wishlist.map(product=>
    <div key={product._id} className='card col-lg-4'>
    <h2>{product.title}</h2>
    <h3>{product.marka}</h3>
    <p>{product.price}$</p>
   <button onClick={() => deleteWish(product)}>delete</button>
 
  </div>
  )
}
    </div>
  )
}

export default WishlistPage