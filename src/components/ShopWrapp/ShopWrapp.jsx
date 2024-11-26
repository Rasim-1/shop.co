import React from 'react'
import s from './ShopWrapp.module.scss'

const ShopWrapp = () => {
  return (
   <>
   <section className={s.shopWrapp}>
    <div className="container">
        <div className={s.wrapp}>
            <div className={s.card}>
                <h2>Casual</h2>
            </div>
            <div className={s.card}>
                <h2>Formal</h2>
            </div>
            <div className={s.card}>
                <h2>Party</h2>
            </div>
            <div className={s.card}>
                <h2>GYM</h2>
            </div>
        </div>
    </div>
   </section>
   
   
   
   
   
   </>
  )
}

export default ShopWrapp