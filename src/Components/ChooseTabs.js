import React, {Component} from 'react';
import '../styles/ChooseTabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "flex", 
        justifyContent: 'center', 
        width: '12px',
        height: '8px',
        content: '' }}
      onClick={onClick}
    >
    <img src='/images/Choose/Slider/left.svg' 
      style={{...style, display: 'block'}}/>
    </div>
  );
}
  

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        position: 'absolute', 
        display: "flex", 
        justifyContent: 'center', 
        width: '12px',
        height: '8px',
        content: '' }}
      onClick={onClick}
    >
      <img src='/images/Choose/Slider/right.svg' 
      style={{...style, display: 'block'}}/>
    </div>
  );
}

class ChooseTab1 extends Component {
    render() {
      const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 4,
        variableWidth: true,
        arrows: false
      };
      return (
        <div className='cs-wrapper'>
          <Slider {...settings}>
              <div className='cs-block-tab1'>
                  <img src='/images/Choose/Slider/1.png' className='cs-img' alt='' />
                  <img src='/images/Choose/Slider/intersect.svg' className='cs-tab-pad' />
                  <div className='cs-tab1-discount'>-20%</div>
                  <div className='cs-tab-text'>Для тех кто <br />рядом</div>
              </div>
              <div className='cs-block-tab1'>
                  <img src='/images/Choose/Slider/2.png' className='cs-img' alt='' />
                  <img src='/images/Choose/Slider/intersect.svg' className='cs-tab-pad' />
                  <div className='cs-tab1-discount'>-10%</div>
                  <div className='cs-tab-text'>Раннее <br />бронирование</div>
              </div>
          </Slider>
        </div>
      );
    }
  }

class ChooseTab3 extends Component {
    render() {
      const settings = {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        row: 1,
        variableWidth: true,
        arrows: false
      };
      return (
        <div className='cs-wrapper'>
          <Slider {...settings}>
            <div className='cs-block-tab3'>
                <img src='/images/Choose/Slider/3-1.png' className='cs-img' alt='' />
                <img src='/images/Choose/Slider/pad.svg' className='cs-tab-pad' />
                <div className='cs-tab-text'>Семейный отдых</div>
            </div>
            <div className='cs-block-tab3'>
                <img src='/images/Choose/Slider/3-2.png' className='cs-img' alt='' />
                <img src='/images/Choose/Slider/pad.svg' className='cs-tab-pad' />
                <div className='cs-tab-text'>Оздоровление</div>
            </div>
            <div className='cs-block-tab3'>
                <img src='/images/Choose/Slider/3-3.png' className='cs-img' alt='' />
                <img src='/images/Choose/Slider/pad.svg' className='cs-tab-pad' />
                <div className='cs-tab-text'>Релакс и красота</div>
            </div>
            <div className='cs-block-tab3'>
                <img src='/images/Choose/Slider/2.png' className='cs-img' alt='' />
                <img src='/images/Choose/Slider/pad.svg' className='cs-tab-pad' />
                <div className='cs-tab-text'>Новые впечатления</div>
            </div>
          </Slider>
        </div>
      );
    }
  }


function ChooseTabs() {
    return (
        <Tabs
        className={'choose-tab'}
        selectedTabClassName={'choose-tab-selected'}
        >
            <div className='choose-tabs-wrapper'>
              <TabList className={'choose-tablist'}>
                  <Tab className={'choose-tab_tab'}>Спецпредложения</Tab>
                  <Tab className={'choose-tab_tab'}>Афиша</Tab>
                  <Tab className={'choose-tab_tab'}>Категории отдыха</Tab>
              </TabList>

              <div className='choose-buttons'>
                <button className='choose-btn'>
                  <img src='/images/Choose/Slider/left.svg' />
                </button>
                <button className='choose-btn'>
                  <img src='/images/Choose/Slider/right.svg' />
                </button>
              </div>
            </div>
            <TabPanel>
                <ChooseTab1 />
            </TabPanel>
            <TabPanel>

            </TabPanel>
            <TabPanel>
                <ChooseTab3 />
            </TabPanel>
        </Tabs>
    );
}

export default ChooseTabs;
