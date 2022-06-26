import '../styles/MenuBanner.css'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react';


function MenuBanner(){
  return(
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
    <div>
        <img src='/images/Side/Banner/photo.png' />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="/images/Side/Banner/photo.png" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="/images/Side/Banner/photo.png" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  );
}

export default MenuBanner;