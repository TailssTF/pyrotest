import React, {Component} from 'react';
import '../styles/ChooseTabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
class ChooseTab1 extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <img src='/images/Choose/Slider/1.png' className='cs-img' alt='' />
            </div>
            <div>
                <img src='/images/Choose/Slider/2.png' className='cs-img' alt='' />
            </div>
          </Slider>
        </div>
      );
    }
  }

class ChooseTab3 extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true
      };
      return (
        <div>
          <Slider {...settings}>
          <div className='cs-block-cat'>
                        <img src='/images/Choose/Slider/3-1.png' className='cs-img' alt='' />
                    </div>
                    <div className='cs-block-cat'>
                        <img src='/images/Choose/Slider/3-2.png' className='cs-img' alt='' />
                    </div>
                    <div className='cs-block-cat'>
                        <img src='/images/Choose/Slider/3-3.png' className='cs-img' alt='' />
                    </div>
          </Slider>
        </div>
      );
    }
  }


function ChooseTabs() {
    return (
        <Tabs>
            <TabList>
                <Tab>Спецпредложения</Tab>
                <Tab>Афиша</Tab>
                <Tab>Категории отдыха</Tab>
            </TabList>
        
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
