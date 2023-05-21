import { Container } from '../Container/Conteiner';
import {
 Section,
 Title,
 TitleSpan,
 Post,
 AwardsList,
 AwardItem,
 CustomerText,
} from './Benefits.styled';

import award1 from '../../images/awards/award-best-customer@1x.png';
import award2 from '../../images/awards/award-best-useability@1x.png';
import award3 from '../../images/awards/award-best-support@1x.png';
import award4 from '../../images/awards/award-5-stars@1x.png';

import award1Retina from '../../images/awards/award-best-customer@2x.png';
import award2Retina from '../../images/awards/award-best-useability@2x.png';
import award3Retina from '../../images/awards/award-best-support@2x.png';
import award4Retina from '../../images/awards/award-5-stars@2x.png';

const awards = [award1, award2, award3, award4];
const awardsRetina = [award1Retina, award2Retina, award3Retina, award4Retina];

const Benefits = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section>
   <Container variant="primary">
    <Title>
     Customer-facing <TitleSpan>teams love </TitleSpan>Primchat
    </Title>
    <Post>
     Provide the best, most intuitive support across all channels. Proactively
     understand customer needs to serve excellence the first time.
    </Post>
    <AwardsList>
     {isRetina
      ? awardsRetina.map((award, id) => {
         return (
          <AwardItem key={id}>
           <img src={award} alt={`Award ${id}`} height={225} width={'100%'} />
          </AwardItem>
         );
        })
      : awards.map((award, id) => {
         return (
          <AwardItem key={id}>
           <img src={award} alt={`Award ${id}`} />
          </AwardItem>
         );
        })}
    </AwardsList>
    <CustomerText>We've got happy customers, ☺️ too.</CustomerText>
   </Container>
  </Section>
 );
};

export default Benefits;
