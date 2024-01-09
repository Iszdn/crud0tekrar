import { createContext, useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";


export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
   const [basket, setBasket] = useLocalStorage("basket")


   const data = {
      basket,
      setBasket,
      addBasket,
      increaseBasket,
      decreaseBasket,
      deleteBasket
   }

   function addBasket(product) {
      const productIndex = basket.findIndex(x => x._id === product._id)
      if (productIndex === -1) {
         setBasket([...basket, { ...product, count: 1 }])
         return
      }
      basket[productIndex].count++  
   }
function increaseBasket(product) {
const productIndex=basket.findIndex(x=>x._id===product._id)
if (productIndex!==-1) {
   basket[productIndex].count++ 
   setBasket([...basket])
}
}
function decreaseBasket(product) {
   const productIndex=basket.findIndex(x=>x._id===product._id)

   if (productIndex!==-1) {
      basket[productIndex].count-- 
      setBasket([...basket])
      if (basket[productIndex].count===0) {
         deleteBasket(product)
      }
   }
   }
   function deleteBasket(product) {
      const existProduct=basket.filter(x=>x._id!==product._id)
      setBasket(existProduct)
   }


   return (
      <BasketContext.Provider value={data}>
         {children}
      </ BasketContext.Provider>
   )
}
