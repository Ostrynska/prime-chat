import { ReactSVG } from 'react-svg';
import Slider from 'react-slick';
import './styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow from '../../images/arrow.svg';

function SampleNextArrow(props) {
 const { onClick } = props;
 return (
  <div className="sample-next-arrow" onClick={onClick}>
   <p>Next</p>
   <ReactSVG src={arrow} onError={error => console.log(error.message)} />
  </div>
 );
}

const CenterMode = ({ children }) => {
 const appendDots = dots => {
  return (
   <div style={{ position: 'absolute', left: 420, top: '-111px' }}>
    <ul style={{ display: 'flex', gap: 17 }}>
     {dots.map((dot, index) => (
      <li
       key={index}
       className={`${dot.props.className} custom-dot${
        dot.props.className === 'slick-active' ? ' active-dot' : ''
       }`}
      >
       {dot.props.children}
      </li>
     ))}
    </ul>
   </div>
  );
 };
 const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: '15px',
  slidesToShow: 2,
  dots: true,
  appendDots: appendDots,
  speed: 500,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
 };
 return (
  <>
   <Slider {...settings}>{children}</Slider>
  </>
 );
};

export default CenterMode;
