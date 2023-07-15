import React from 'react'
import './navbar.scss'
import Categories from '../categories/Categories'
import logo from '../../../assets/logo.jpg'
import iconD from '../../../assets/icon-arrow-down.svg'
import person from '../../../assets/person.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <figure className='logo__figure'>
                <img src={logo} alt="logo" />
            </figure>
            <h2>CINE COLOMBIA</h2>           
        </div>
        <Categories />
        <div className='diary'>
            <div className='diary__containers'>
            <p>Cines cercanos</p>
        <figure className='diary__options' >
          <figcaption><p>Macro plaza del Mar</p></figcaption>
          <img src={iconD} alt="logo" />
        </figure>
        </div>
        <div className='diary__containers'>
            <p>Fecha</p>
        <figure className='diary__options'>
          <figcaption><p>07 julio</p></figcaption>
          <img src={iconD} alt="logo" />
        </figure>
        </div>
        </div>
        <figure className='person'>
            <img src={person} alt="" />
        </figure>
    </div>
  )
}

export default Navbar