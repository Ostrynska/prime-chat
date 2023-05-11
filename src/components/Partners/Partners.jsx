import { Container } from '../Container/Conteiner';
import { ReactSVG } from 'react-svg';
import {
 PartnersSection,
 PartnersWrap,
 PartnersTitle,
 PartnersList,
 PartnersItem,
} from './Partners.styled';

import partner1 from '../../images/companies/company-1.svg';
import partner2 from '../../images/companies/company-2.svg';
import partner3 from '../../images/companies/company-3.svg';
import partner4 from '../../images/companies/company-4.svg';
import partner5 from '../../images/companies/company-5.svg';
import partner6 from '../../images/companies/company-6.svg';
import partner7 from '../../images/companies/company-7.svg';
import partner8 from '../../images/companies/company-8.svg';
import partner9 from '../../images/companies/company-9.svg';

const logos = [
 partner1,
 partner2,
 partner3,
 partner4,
 partner5,
 partner6,
 partner7,
 partner8,
 partner9,
];

const Partners = () => {
 return (
  <PartnersSection>
   <Container>
    <PartnersWrap>
     <PartnersTitle>Trusted by 25K+ businesses</PartnersTitle>
     <PartnersList>
      {logos.map((logo, id) => {
       return (
        <PartnersItem key={id}>
         <ReactSVG src={logo} onError={error => console.log(error.message)} />
        </PartnersItem>
       );
      })}
     </PartnersList>
    </PartnersWrap>
   </Container>
  </PartnersSection>
 );
};

export default Partners;
