import React from 'react'

const Cine = ({data}) => {
  return (
    <div className='cines__container'>
        <input type="checkbox" id="marcoPlaza" />
        <label>{data.name}</label>
    </div>
)
}

export default Cine; 