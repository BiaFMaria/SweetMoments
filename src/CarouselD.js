import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselD = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: '600px',
             height: '320px' }} // Defina a largura e altura desejadas
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselD;
