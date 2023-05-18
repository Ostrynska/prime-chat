import { ReactSVG } from 'react-svg';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow from '../../images/arrow.svg';

function SamplePrevArrow() {
 return <></>;
}

function SampleNextArrow(props) {
 const { onClick } = props;
 return (
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
 );
}

const CenterMode = ({ children }) => {
 const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '290px',
  slidesToShow: 1,
  speed: 500,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
 };
 return (
  <>
   <Slider {...settings}>{children}</Slider>
  </>
 );
};

export default CenterMode;
