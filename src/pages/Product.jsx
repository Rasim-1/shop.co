import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '/public/products.json'
import ProductWrapp from '../components/ProductWrapp/ProductWrapp'
import Stays from '../components/Stays/Stays'

const Product = () => {
    const{id} = useParams()

    const product = Products.find(item => item.id === Number(id))
  return (
<>
<ProductWrapp product={product}/>
<Stays/>


</>
  )
}

export default Product