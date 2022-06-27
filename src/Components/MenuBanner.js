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
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected)
          return (
            <li className='indicator-selected' />
          );
        return(
          <li className='indicator' 
            onClick={onClickHandler}
            value={index}
            key={index}
            role='button'
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
    <div>
        <img src='/images/Side/Banner/intersect.svg' className='side-banner-intersect' />
        <div className='side-banner-info'>
          <div className='side-banner-info-header'>Антистресс</div>
          <div className='side-banner-info-text'>10-21 дня</div>
          <button className='side-banner-info-button'>Подробнее</button>
        </div>
        <img src='/images/Side/Banner/photo.png' />
    </div>
    <div>
      <img src='/images/Side/Banner/intersect.svg' className='side-banner-intersect' />
          <div className='side-banner-info'>
            <div className='side-banner-info-header'>Антистресс</div>
            <div className='side-banner-info-text'>10-21 дня</div>
            <button className='side-banner-info-button'>Подробнее</button>
          </div>
          <img src='/images/Side/Banner/photo.png' />
    </div>
    <div>
      <img src='/images/Side/Banner/intersect.svg' className='side-banner-intersect' />
          <div className='side-banner-info'>
            <div className='side-banner-info-header'>Антистресс</div>
            <div className='side-banner-info-text'>10-21 дня</div>
            <button className='side-banner-info-button'>Подробнее</button>
          </div>
          <img src='/images/Side/Banner/photo.png' />
    </div>
</Carousel>
  );
}

export default MenuBanner;