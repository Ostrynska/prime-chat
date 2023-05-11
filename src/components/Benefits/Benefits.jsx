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

import award1 from '../../images/awards/award-best-customer.png';
import award2 from '../../images/awards/award-best-useability.png';
import award3 from '../../images/awards/award-best-support.png';
import award4 from '../../images/awards/award-5-stars.png';

const awards = [award1, award2, award3, award4];

const Benefits = () => {
 return (
  <Section>
   <Container>
    <Title>
     Customer-facing <TitleSpan>teams love </TitleSpan>Primchat
    </Title>
    <Post>
     Provide the best, most intuitive support across all channels. Proactively
     understand customer needs to serve excellence the first time.
    </Post>
    <AwardsList>
     {awards.map((award, id) => {
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
