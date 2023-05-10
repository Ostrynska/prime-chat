import {
 Container,
 Section,
 Title,
 TitleSpan,
 IntegrationImage,
 Text,
 List,
 ListItem,
 Check,
 CheckText,
} from './Integration.styled';
import { PreTitle } from '../PreTitle/PreTitle';

import imageIntegration from '../../images/integration/integrationDesktop@1x.png';
import imageIntegrationRetina from '../../images/integration/integrationDesktop@2x.png';

const Integration = () => {
 return (
  <Section>
   <Container>
    <PreTitle variant="secondary" text={'Integration'} />
    <Title>
     Connect with your customers on <TitleSpan>all channels</TitleSpan>
    </Title>
    <img src={imageIntegration} alt="Integration" />
    <Text>
     Increase engagement and make buying easy with our stylish live chat widget.
     Provide personalized real-time support and invite your customers to chat
     based on the time spent on your site, location, and visited pages.
    </Text>
    <List>
     <ListItem>
      <Check />
      <CheckText>Advanced search</CheckText>
     </ListItem>
     <ListItem>
      <Check />
      <CheckText>Multi-channel communication</CheckText>
     </ListItem>
     <ListItem>
      <Check />
      <CheckText>Advanced security</CheckText>
     </ListItem>
    </List>
   </Container>
  </Section>
 );
};

export default Integration;