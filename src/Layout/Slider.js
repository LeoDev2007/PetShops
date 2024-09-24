import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/Banner.png'
import styles from './Styles/Slider.module.css'



function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className={styles.slider} alt='Dog' src={img1} />
      </Carousel.Item>
      <Carousel.Item>
      <img className={styles.slider} alt='Dog' src={img1} />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className={styles.slider} alt='Dog' src={img1} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;