import React from 'react'
import s from './Stays.module.scss'

const Stays = () => {
  return (
   <>
       <section className={s.Stays}>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.card1}>
                    <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                </div>
                <div className={s.card2}>
                    <input placeholder='Enter your email address'  type="text" /> 
                    
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    </section>
   
   
   
   </>
  )
}

export default Stays