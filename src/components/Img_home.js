import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import home_1 from './img/home_1.jpg';
import home_2 from './img/home_2.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      
  <div className='m1'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src = {home_1} class="home_img" alt="home_img_1"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {home_2} class="home_img" alt="home_img_2"/>
      </Carousel.Item>
    </Carousel> 
  </div>
    
  );
}

export default ControlledCarousel;