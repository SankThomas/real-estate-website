import React, { useState } from 'react'
import { stats } from '../stats-data'

const Showcase = () => {
  // eslint-disable-next-line
  const [data, setData] = useState(stats)
  console.log(data)

  return (
    <>
      <section className='showcase'>
        {data.map((home) => {
          const { id, number, title } = home

          return (
            <div className='overlay' key={id}>
              <h2>{number}</h2>
              <h4>{title}</h4>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Showcase
