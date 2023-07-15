import React from 'react'
import './home.scss';
import Navbar from '../navbar/Navbar';
import Carrusel from '../carrusel/Carrusel';
import Cards from '../../cards/cards.jsx';



const Home = () => {
  return (
    <div>
        <Navbar />
        <Carrusel />
        <Cards />
    </div>
  )
}
export default Home;