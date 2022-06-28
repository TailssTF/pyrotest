import '../styles/ChooseSlider.css'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react';


const ChooseSlider = () => (
    <div>
        <div className='cs-slides'>
            <Carousel
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            animationHandler='fade'

            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                    <button type="button" onClick={onClickHandler}  className='cs-left'>
                        <img src='/images/Choose/Slider/left.svg' className='cs-arrow' alt='' />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) => (
                    <button type="button" onClick={onClickHandler} className='cs-right'>
                        <img src='/images/Choose/Slider/right.svg' className='cs-arrow' alt='' />
                    </button>
                )
            }
            >
                <div key='slide1' className='cs-slide'>
                    <div className='cs-block'>
                        <img src='/images/Choose/Slider/1.png' className='cs-img' alt='' />
                    </div>
                    <div className='cs-block'>
                        <img src='/images/Choose/Slider/2.png' className='cs-img' alt='' />
                    </div>
                </div>
                <div key='slide2' className='cs-slide'>

                </div>
                <div key='slide3' className='cs-slide'>
                    <div className='cs-block-cat'>
                        <img src='/images/Choose/Slider/3-1.png' className='cs-img' alt='' />
                    </div>
                    <div className='cs-block-cat'>
                        <img src='/images/Choose/Slider/3-2.png' className='cs-img' alt='' />
                    </div>
                    <div className='cs-block-cat'>
                        <img src='/images/Choose/Slider/3-3.png' className='cs-img' alt='' />
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  );

  export default ChooseSlider;