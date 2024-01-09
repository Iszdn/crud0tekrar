import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar'>
<Link to="/">Home</Link>
<Link to="/wishlist">Wishlist</Link>
<Link to="/basket">Basket</Link>
    </nav>
  )
}

export default Navbar