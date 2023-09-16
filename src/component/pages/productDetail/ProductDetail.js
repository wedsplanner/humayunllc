import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const ProductDetail = () => {
    const location = useLocation()
    console.log(location.state)
    const data = location.state
    const {id} = useParams()
    console.log(id)

  return (
    <div>
      <img src={data.img} alt="product"  />
      <h1>{data.name}</h1>
      <h2>{data.price}</h2>
    </div>
  )
}

export default ProductDetail