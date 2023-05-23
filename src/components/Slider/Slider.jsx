import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
// import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow from '../../images/arrow.svg';

function SamplePrevArrow() {
 return <></>;
}

function SampleNextArrow(props) {
 const { onClick } = props;
 const [showBtn, setShowBtn] = useState(false);

 useEffect(() => {
  const handleResize = () => {
   setShowBtn(window.innerWidth >= 1200);
  };

  handleResize(); // Перевірка при завантаженні компонента

  window.addEventListener('resize', handleResize);
  return () => {
   window.removeEventListener('resize', handleResize);
  };
 }, []);
 return (
  <>
   {showBtn ? (
    <div
     style={{
      display: 'flex',
      alignItems: 'center',
      padding: '17px 27px 18px',
      width: '122px',
      background: '#efefef',
      borderRadius: '72px',
      position: 'absolute',
      top: '-131px',
      right: ' 0px',
     }}
     onClick={onClick}
    >
     <p
      style={{
       fontFamily: 'Inter, sans-serif',
       fontWeight: '600',
       fontSize: '18px',
       lineHeight: '160%',
       color: '#263238',
       marginRight: '10px',
      }}
     >
      Next
     </p>
     <ReactSVG src={arrow} onError={error => console.log(error.message)} />
    </div>
   ) : (
    <></>
   )}
  </>
 );
}

const Responsive = ({ children }) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
   {
    breakpoint: 1919,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
    },
   },
   {
    breakpoint: 1201,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
    },
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
    },
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     dots: true,
    },
   },
  ],
 };
 return (
  <>
   <Slider {...settings}>{children}</Slider>
  </>
 );
};

export default Responsive;
