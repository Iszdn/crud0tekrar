
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
const [product, setProduct] = useState([])
const [loading, setLoading] = useState(true)
const [openModal, setOpenModal] = useState(false)

const getProducts=async()=>{
const res=await axios("http://localhost:5000/")
setProduct(res.data)
setLoading(false)
}
const deleteProduct=async (id)=>{
  await axios.delete(`http://localhost:5000/${id}`)
  getProducts()
}
const updateProduct=async (id)=>{
  await axios.put(`http://localhost:5000/${id}`)
  getProducts()
  setOpenModal(!openModal)
}
useEffect(() => {
  getProducts()
}, [])


  return (
    <>
{
              openModal &&
              <form className={`${openModal} ? "open" : "close"`}>
<input type="text" /> <br />
<input type="text" /> <br />
<input type="text" />
            </form>
            }
      {
        loading ? <span class="loader"></span>:
        product && product.map((x)=>
          <ul key={x.id}>
            <li>{x.title}</li>
            <li>{x.marka}</li>
            <li>{x.price}</li>
            <button onClick={()=>(deleteProduct(x._id))}>delete</button><button onClick={()=>(updateProduct(x._id))}>update</button>
          </ul>
        )
      }
    </>
  )
}

export default App
