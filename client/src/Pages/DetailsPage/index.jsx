import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
const DetailsPage = () => {
 
  const [data, setData] = useState()
const {id}=useParams()

  async function getById() {
    const res=await axios.get(`http://localhost:5000/${id}`)
    setData(res.data)
  }

console.log(data);
  useEffect(() => {
    getById()
  }, [])
  
  return (
    <>
    
            {
              data &&  <div  className='card col-lg-4'>
              <h2>{data.title}</h2>
              <h3>{data.marka}</h3>
              <p>{data.price}$</p>
           </div>
            }
       
    </>
    
    
  
  )
}

export default DetailsPage