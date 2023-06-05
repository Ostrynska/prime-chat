import { Container } from '../Container/Conteiner';
import { PreTitle } from '../PreTitle/PreTitle';

import { HashLink as Link } from 'react-router-hash-link';

import {
 Section,
 SpanTitle,
 Title,
 List,
 Item,
 Check,
 ItemTitle,
 Background,
 BackgroundAccent,
 PriceSpan,
 PriceText,
 Price,
 PriceTitle,
 PriceList,
 PriceListItem,
 PriceListText,
 PriceListTextSpan,
 PriceListTextHighlight,
 Button,
} from './Pricing.styled';

const Pricing = () => {
 return (
  <Section id="pricing">
   <Container>
    <div
     style={{
      textAlign: 'center',
     }}
    >
     <PreTitle variant="primary" text={'Pricing'} />
     <Title>
      Build stronger <SpanTitle>customer relationships </SpanTitle>with Primchat
     </Title>
    </div>
    <List>
     <Item>
      <ItemTitle>Standard</ItemTitle>
      <Background>
       <Price>
        <PriceSpan>$20</PriceSpan>
        <br /> per user per month
       </Price>
       <PriceText>
        Intuitive, world-class support tools for growing teams
       </PriceText>
      </Background>
      <PriceTitle>Get started with...</PriceTitle>
      <PriceList>
       <PriceListItem>
        <Check />
        <PriceListText>
         Live <PriceListTextSpan>chat for support</PriceListTextSpan>
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Team inboxes</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Ticketing workflows</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>
         Service <PriceListTextSpan>Level Agreement </PriceListTextSpan>rules
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Workload management</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>
         <PriceListTextSpan>Role-based </PriceListTextSpan>permissions
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Outcome reporting</PriceListText>
       </PriceListItem>
      </PriceList>
      <Link smooth to="/#subscribes">
       <Button>Get started</Button>
      </Link>
     </Item>

     <Item>
      <ItemTitle>Plus</ItemTitle>
      <BackgroundAccent>
       <Price>
        <PriceSpan>$20</PriceSpan>
        <br /> per user per month
       </Price>
       <PriceText>
        Intuitive, world-class support tools for growing teams
       </PriceText>
      </BackgroundAccent>
      <PriceTitle>All Standard features and...</PriceTitle>
      <PriceList>
       <PriceListItem>
        <Check />
        <PriceListText>
         Outbound email and
         <PriceListTextSpan> messaging</PriceListTextSpan>
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>
         <PriceListTextHighlight highlight={false}>
          Push messages{' '}
         </PriceListTextHighlight>
         & notifications
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Custom bots</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Mobile Carousels</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Banner messages</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>
         <PriceListTextHighlight highlight={true}>
          Multi-channel
         </PriceListTextHighlight>{' '}
         campaigns
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>A/B testing & control groups</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Message versioning</PriceListText>
       </PriceListItem>
      </PriceList>
      <Link smooth to="/#subscribes">
       <Button>Get started</Button>
      </Link>
     </Item>

     <Item>
      <ItemTitle>Company</ItemTitle>
      <Background>
       <Price>
        <PriceSpan>$20</PriceSpan>
        <br /> per user per month
       </Price>
       <PriceText>
        Intuitive, world-class support tools for growing teams
       </PriceText>
      </Background>
      <PriceTitle>All Plus features and...</PriceTitle>
      <PriceList>
       <PriceListItem>
        <Check />
        <PriceListText>Conversational chatbots</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Live chat for sales</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Smart lead qualification</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Service Level Agreement rules</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>
         <PriceListTextSpan>Workload</PriceListTextSpan> management
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Role-based permissions</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Outcome reporting</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Multiple team inboxes</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>
         Automatic{' '}
         <PriceListTextHighlight highlight={true}>
          meeting booking
         </PriceListTextHighlight>
        </PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Conversation routing rules</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Account-based assignments</PriceListText>
       </PriceListItem>
       <PriceListItem>
        <Check />
        <PriceListText>Revenue and performance</PriceListText>
       </PriceListItem>
      </PriceList>
      <Link smooth to="/#subscribes">
       <Button>Get started</Button>
      </Link>
     </Item>
    </List>
   </Container>
  </Section>
 );
};

export default Pricing;
