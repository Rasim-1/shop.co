import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import s from './Star.module.scss'
import Card from '../Card/Card'
import Products from '/public/products.json'

const Star = () => {
  return (
    <>
  <section className={s.Star}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.Star__title}>
              <SectionTitle>OUR HAPPY CUSTOMERS</SectionTitle>
              <div className={s.arrow}>
              <img src="/Happy-arrow.svg" alt="" />
              <img src="/Happy-arrow2.svg" alt="" />
              </div>
            </div>
            <div className={s.cards}>
              <div className={s.card}>
                <img src="/Happy-svg1.svg" alt="" />
                <div>
                <b>Sarah M.<img src="/Happy-svg2.svg" alt="" /></b>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
              </div>
              <div className={s.card}>
                <img src="/Happy-svg1.svg" alt="" />
                <div>
                <b>Alex K.<img src="/Happy-svg2.svg" alt="" /></b>
                <p>
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>
              </div>
              <div className={s.card}>
                <img src="/Happy-svg1.svg" alt="" />
                <div>
                <b>James L.<img src="/Happy-svg2.svg" alt="" /></b>
                <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>
              </div>
            </div>
          </div>
           <div className={s.wrappers}>
                {Products.slice(8, 12).map(card => (
                    <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
                ))}
                
                
            </div>
        </div>
   

            
      </section>


    
    </>
  )
}

export default Star