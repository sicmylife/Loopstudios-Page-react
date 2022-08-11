import React from 'react'
import { useState } from 'react'
import data from '../data-mobile'

const Creations = () => {
    const [cards,setcards] = useState(data)
  return (
    <section className='creations-mobile'>
    <h2>Our Creation</h2>
    <section>
        {cards.map((card) => {
            const {id,image,title} = card
            return (
                <article key={id}>
                    <img src={image} alt="creation card" />
                    <h3>{title}</h3>
                </article>
            )
        }
        
        )}
    </section>
    <div className='btn-container'>
        <button className='btn'>See all</button>
    </div>
    </section>
  )
}

export default Creations