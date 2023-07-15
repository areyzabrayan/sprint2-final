import React from 'react'
import './categories.scss'

const Categories = () => {
  return (
    <div className='buttons'>
        <button>Accion</button>
        <button>Terror</button>
        <button className='buttons__large'>Ciencia Ficción</button>
        <button>Comedia</button>
    </div>
  )
}

export default Categories;