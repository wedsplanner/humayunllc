import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const ProductDetail = () => {
    const location = useLocation()
    console.log(location.state)
    const {id} = useParams()
    console.log(id)

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail