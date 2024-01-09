import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../../Card'

const Homepage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  async function getProducts() {
    const res = await axios("http://localhost:5000/")
    setData(res.data)
    setLoading(false)
  }
  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div id='home'>
      <div className='row'>

        {
          loading ? <p>loading...</p> :
            data && data.map((item) =>
              <Card product={item}  key={item._id}/>
            )
        }
        
      </div>
    </div>
  )
}

export default Homepage
