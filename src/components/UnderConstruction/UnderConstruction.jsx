import { ReactSVG } from 'react-svg';
import { ImageWrapp, Title, Text } from './UnderConstruction.styled';

import underConstruction from '../../images/undraw_dev.svg';

const UnderConstruction = () => {
 return (
  <div>
   <ImageWrapp>
    <ReactSVG src={underConstruction} />
   </ImageWrapp>
   <Title>Under Construction !</Title>
   <Text>To make things right we need some time to rebuild</Text>
  </div>
 );
};

export default UnderConstruction;
