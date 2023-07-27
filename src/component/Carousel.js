import React from 'react';
import CardCarousel from "../component/CardCarousel";


const Carousel = () => {
  return (
    <div className='CarouselSection'>
      <h1 className='CarouselSectionTitile'>Latest Articles</h1>
      <CardCarousel />
    </div>
  )
}

export default Carousel