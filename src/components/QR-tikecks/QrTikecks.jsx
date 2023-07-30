import React from 'react'
import './QrTikecks.scss'
import rapido from '../../assets/Rapidos.jpg'
import qr from '../../assets/QR.svg'

const QrTikecks = () => {
  return (
    <div className='containerQR'>
    <article className='containerQ'>
        <div className='containerQ__title'>
            <h1>Boletos</h1>
            <div className='containerQ__date'>
            <p>07JUL</p>
            <p>7:30PM</p>
            </div>
        </div>
        <div className='containerQ__main'>
            <figure>
                <img src={rapido} alt="" />
            </figure>
            <div>
                <p>pelicula:</p>
                <p>Cine:</p>
                <p>Asientos:</p>
                <p>Sala:</p>
            </div>
        </div>
        <div className='containerQ__QR'>
            <figure>
                <img src={qr} alt="" />
            </figure>
            <p>WKXTXK9Z</p>
        </div>
    </article>
    </div>
  )
}

export default QrTikecks