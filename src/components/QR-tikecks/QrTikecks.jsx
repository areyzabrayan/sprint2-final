import React, { useContext } from 'react'
import './QrTikecks.scss'
import qr from '../../assets/QR.svg'
import { AppContext } from '../router/router'

const QrTikecks = () => {
    const { seletDay, selectedButton, movie,selectedCinemaName, seatsSelection  } = useContext(AppContext);
  return (
    <div className='containerQR'>
    <article className='containerQ'>
        <div className='containerQ__title'>
            <h1>Boletos</h1>
            <div className='containerQ__date'>
            <p>{seletDay}</p>
            <p>{selectedButton}</p>
            </div>
        </div>
        <div className='containerQ__main'>
            <figure>
                <img src={movie.image} alt="" />
            </figure>
            <div>
                <p>{`Nombre: ${movie.name}`}</p>
                <p>{`Cine: ${selectedCinemaName}`}</p>
                <p>{`Sillas: ${seatsSelection}`}</p>
                <p>Sala: 1</p>
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