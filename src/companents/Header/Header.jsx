import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <>
  <header className={s.header}>
    <div className="container">
        <nav className={s.nav}>
            <Link className={s.logo} to="/">SHOP.CO</Link>
            <div className={s.menu}>

    <Link to={"/Home"}>Shop </Link>
    <Link to={"/Onsale"}>OnSale</Link>
    <Link to={"/NewArrians"}>NewArrians</Link>
    <Link to={"/Brands"}>Brands</Link>
            </div>

            <input type="text" className={s.search} />
            <div className={s.box}>
                <img src="/icon-1.svg" alt="" />
                <img src="/icon-2.svg" alt="" />
            </div>
        </nav>
    </div>

  </header>
  
  
  </>
  )
}

export default Header