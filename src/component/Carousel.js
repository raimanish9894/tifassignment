import React from 'react';
import CardCarousel from "../component/CardCarousel";


const Carousel = () => {
  return (
    <section className='CarouselSection'>
      <h1 className='CarouselSectionTitile'>Latest Articles</h1>
      <CardCarousel />
    </section>
  )
}

export default Carousel