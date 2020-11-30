import React, { useState } from 'react'
import { data } from '../hotel-data'

const Homes = () => {
  // eslint-disable-next-line
  const [homes, setHomes] = useState(data)

  return (
    <>
      <section className='homes'>
        {homes.map((home) => {
          const { id, location, description, image, price } = home

          return (
            <div className='home' key={id}>
              <img src={image} alt='house' />
              <small>{location}</small>
              <p>{description}</p>
              <h4>$ {price}</h4>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Homes
