import React from 'react'
import './Destination.css'
import borabora from '../../assets/borabora.jpg'
import borabora2 from '../../assets/borabora2.jpg'
import maldives from '../../assets/maldives.jpg'
import maldives2 from '../../assets/maldives2.jpg'
import keywest from '../../assets/keywest.jpg'


const Destination = () => {
  return (
    <div className='destination' name='destinations'>
        <div className="container">
            <h1>All-Inclusive Resorts</h1>
            <p>On the Caribbean's Best Beaches</p>
            <div className="img-container">
                <img src={borabora} className="span-3 image-grid-row-2" alt="/" />
                <img src={borabora2} alt="/" />
                <img src={maldives} alt="/" />
                <img src={maldives2} alt="/" />
                <img src={keywest} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Destination