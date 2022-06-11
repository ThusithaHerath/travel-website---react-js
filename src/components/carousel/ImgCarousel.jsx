import React from 'react'
import './ImgCarousel.css'
import {Carousel} from 'react-responsive-carousel'
import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const ImgCarousel = () => {
  return (
      <div className="container" name='carousel'>
  <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
       <div>
           <img src={BoraBora} alt="/" />
           <p className='legend'>BoraBora</p>
       </div>
       <div>
           <img src={BoraBora2} alt="/" />
           <p className='legend'>BoraBora2</p>
       </div>
       <div>
           <img src={Maldives} alt="/" />
           <p className='legend'>Maldives</p>
       </div>
   </Carousel>
      </div>

  )
}

export default ImgCarousel