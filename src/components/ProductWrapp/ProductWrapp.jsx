import React from 'react'
import s from './Product.module.scss'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import Products from '/public/products.json'
import SectionTitle from '../SectionTitle/SectionTitle'
import Happy from '../Happy/Happy'


const ProductWrapp = ({product}) => {
  return (
  <>
  <section className={s.ProductWrapp}>
    <div className="container">
        <div className={s.wrapp}>
            <div className={s.images}>
            <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <img src={product.image} alt="" />
            </div>

            <div className={s.box}>
                <div>
                    <h2>{product.name}</h2>
                    <h3>⭐⭐⭐⭐ 4/5</h3>
                    <div className={s.price}>
                        <b>{product.price} сум</b>
                        <s>{product.price * 1.1} сум</s>
                    </div>
                    <p> This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                </div>
                <div>
                    <p>select colors</p>
                    <div className={s.colors}>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>

                </div>

                <div>
                    <p>chose size</p>
                    <div className={s.btns}>

                    <button>Small</button>
                    <button>Medium</button>
                    <button>Large </button>
                    <button>X-Large</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

<Happy/>


  
  <SectionTitle orient='center'>You might also like</SectionTitle>
            <div className={s.wrapper}>

                {Products.slice(8, 12).map(card => (
                    <Link to={`/product/${card.id}`}>
                    <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
                    </Link>
                ))}

        
            </div>
  
  
  
  </>
  )
}

export default ProductWrapp