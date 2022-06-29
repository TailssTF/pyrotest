import '../styles/AllInclusive.css'
import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';


class AiSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentSlide: 0,
        autoPlay: true,
    };
  }

  next = () => {
      this.setState((state) => ({
          currentSlide: state.currentSlide + 1,
      }));
  };

  prev = () => {
      this.setState((state) => ({
          currentSlide: state.currentSlide - 1,
      }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
        this.setState({
            currentSlide: index,
        });
    }
};

  render() {
    return (
      <div>
        <div className='ai-header'>
          <div>Все включено</div>
            <div className='ai-buttons'>
            <button onClick={this.prev} className='ai-btn'>
                <img src='/images/AllInclusive/left.svg' className='ai-arrow' />
            </button>
            <button onClick={this.next} className='ai-btn'>
              <img src='/images/AllInclusive/right.svg' className='ai-arrow' />
            </button>
          </div>
        </div>
        <Carousel 
        selectedItem={this.state.currentSlide}
        onChange={this.updateCurrentSlide}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        {...this.props}
        >
          <div className='ai-row'>
            <div className='ai-column-1'>
              <img src='/images/AllInclusive/1.png' className='ai-col-img-1' />
              <div className='ai-col-about'>Заниматесь в тренажерном зале и посещайте групповые тренировки</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
            <div className='ai-column-2'>
              <div className='ai-col-header'>Оздоровление</div>
              <div className='ai-col-text'>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</div>
              <img src='/images/AllInclusive/2.png' className='ai-col-img-2' />
              <div className='ai-col-about'>Питаться в ресторане шведской линии согласно выбранному варианту</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
            <div className='ai-column-3'>
              <img src='/images/AllInclusive/3.png' className='ai-col-img-3' />
              <div className='ai-col-about'>Исследовать все общедоступные зоны и территории комплекса</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
          </div>
          <div className='ai-row'>
            <div className='ai-column-1'>
              <img src='/images/AllInclusive/1.png' className='ai-col-img-1' />
              <div className='ai-col-about'>Заниматесь в тренажерном зале и посещайте групповые тренировки</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
            <div className='ai-column-2'>
              <div className='ai-col-header'>Оздоровление</div>
              <div className='ao-col-text'>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</div>
              <img src='/images/AllInclusive/2.png' className='ai-col-img-2' />
              <div className='ai-col-about'>Питаться в ресторане шведской линии согласно выбранному варианту</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
            <div className='ai-column-3'>
              <img src='/images/AllInclusive/3.png' className='ai-col-img-3' />
              <div className='ai-col-about'>Исследовать все общедоступные зоны и территории комплекса</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
          </div>
          <div className='ai-row'>
            <div className='ai-column-1'>
              <img src='/images/AllInclusive/1.png' className='ai-col-img-1' />
              <div className='ai-col-about'>Заниматесь в тренажерном зале и посещайте групповые тренировки</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
            <div className='ai-column-2'>
              <div className='ai-col-header'>Оздоровление</div>
              <div className='ao-col-text'>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</div>
              <img src='/images/AllInclusive/2.png' className='ai-col-img-2' />
              <div className='ai-col-about'>Питаться в ресторане шведской линии согласно выбранному варианту</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
            <div className='ai-column-3'>
              <img src='/images/AllInclusive/3.png' className='ai-col-img-3' />
              <div className='ai-col-about'>Исследовать все общедоступные зоны и территории комплекса</div>
              <div className='ai-col-more'>
                Читать больше
                <img src='/images/AllInclusive/more-line.svg' className='ai-col-more-line' />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

function AllinclusiveBlock() {
    return (
      <div className='allinclusive-bg'>
        <img src='/images/AllInclusive/Vector-left.svg' className='ai-bg-left' alt='' />
        <img src='/images/AllInclusive/Vector-right.svg' className='ai-bg-right' alt='' />
        <section className='container'>
          <div className='allinclusive-block'>
            <AiSlider />
          </div>
        </section>
      </div>
    );
  }
  export default AllinclusiveBlock;