import { createContext } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";


export const WishlistContext=createContext()


export const WishlistProvider=({children})=> {
    const [wishlist, setWishlist] = useLocalStorage("wishlist")

const data={
    wishlist,
    setWishlist,
    addWish,
    deleteWish
}
function addWish(product) {
    const existWish=wishlist.findIndex(x=>x._id===product._id)
    if (existWish===-1) {
        setWishlist([...wishlist,{...product}]) 
        return
    }
}
function deleteWish(product) {
    const existWish=wishlist.filter(x=>x._id!==product._id)
    setWishlist(existWish) 
}
return(
   <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider> 
)
    
}