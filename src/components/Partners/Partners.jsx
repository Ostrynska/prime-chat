// import { ButtonS } from '../Button/Button';

// import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactSVG } from 'react-svg';
import {
 PartnersSection,
 PartnersTitle,
 PartnersList,
 PartnersItem,
} from './Partners.styled';

// import { ReactComponent as PartnerItem1 } from '../../images/companies/company-1.svg';
// import { ReactComponent as PartnerItem2 } from '../../images/companies/company-2.svg';
// import { ReactComponent as PartnerItem3 } from '../../images/companies/company-3.svg';
// import { ReactComponent as PartnerItem4 } from '../../images/companies/company-4.svg';
// import { ReactComponent as PartnerItem5 } from '../../images/companies/company-5.svg';
// import { ReactComponent as PartnerItem6 } from '../../images/companies/company-6.svg';
// import { ReactComponent as PartnerItem7 } from '../../images/companies/company-7.svg';
// import { ReactComponent as PartnerItem8 } from '../../images/companies/company-8.svg';
// import { ReactComponent as PartnerItem9 } from '../../images/companies/company-9.svg';

const logos = [
 'images/companies/company-1.svg',
 'images/companies/company-2.svg',
 'images/companies/company-3.svg',
 'images/companies/company-4.svg',
 'images/companies/company-5.svg',
 'images/companies/company-6.svg',
 'images/companies/company-7.svg',
 'images/companies/company-8.svg',
 'images/companies/company-9.svg',
];

const Partners = () => {
 return (
  <PartnersSection>
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
  </PartnersSection>
 );
};

export default Partners;
