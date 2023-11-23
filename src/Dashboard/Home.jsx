/* eslint-disable react/jsx-no-undef */
import React, {useCallback, useState, useEffect} from 'react';
import Mid from './Mid';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '30px',
    width: '100%',
  };

  const sliderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
  };

  const slideStyle = {
    flex: '0 0 100%',
    transition: '0.5s',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const images = [
    'skide 1.jpeg',
    'slide2.jpeg',
    'slide3.jpeg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [nextSlide]);

  return (
    <><div style={containerStyle}>
      <div style={sliderContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...slideStyle,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </div>
    </div><Mid /></>
  );
};

export default Home;
