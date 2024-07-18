import React from 'react'
import Carouselcard from './Carouselbox/Carouselcard'

export default function Users() {
  return (
    <div className='users'>
      <div className="heading">
        <h4>Join <span>54,205 + </span>happy users</h4>
        <p>Excellent <img src="Images/stars2.png" alt="" /> Rated 4.5 out of 5 on GMZ AUTOLIKER </p>
      </div>
      <Carouselcard/>
    </div>
  )
}
