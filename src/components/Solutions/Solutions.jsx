import { Container } from '../Container/Conteiner';
import {
 Section,
 Content,
 TitleContent,
 Title,
 TitleSpan,
 PostTitle,
 Post,
 List,
 Item,
 ItemTitle,
} from './Solutions.styled';
import { PreTitle } from '../PreTitle/PreTitle';
import { ButtonWithIcon } from '../Button/Button';

import solutionImage from '../../images/solutions/solutionImage@1x.png';
import {
 Accordion,
 AccordionItem,
 AccordionButton,
 AccordionPanel,
 AccordionIcon,
} from '@chakra-ui/react';

const Solutions = () => {
 return (
  <Section>
   <Container>
    <TitleContent>
     <Content>
      <PreTitle variant="primary" text={'Solutions'} style={{ width: 155 }} />
      <Title>
       Give your customer experience a <TitleSpan>human touch</TitleSpan>
      </Title>
     </Content>
     <PostTitle>
      <div style={{ display: 'inline-block', marginRight: '22px' }}>
       <ButtonWithIcon variant="primary" text={'Chat With Us'} />
      </div>
      <ButtonWithIcon variant="icon" text={'Watch Videos'} />
     </PostTitle>
    </TitleContent>
    <Post>
     <List>
      <Accordion defaultIndex={[0]} allowMultiple>
       <Item>
        <AccordionItem>
         <AccordionButton>
          <ItemTitle>Support</ItemTitle>
          <AccordionIcon />
         </AccordionButton>
         <AccordionPanel pb={4}>
          Shorten the time between intent and purchase by connecting with
          visitors when they’re on your website, and most likely to act.
         </AccordionPanel>
        </AccordionItem>
       </Item>

       <Item>
        <AccordionItem>
         <AccordionButton>
          <ItemTitle>Engage</ItemTitle>
          <AccordionIcon />
         </AccordionButton>
         <AccordionPanel pb={4}>
          Shorten the time between intent and purchase by connecting with
          visitors when they’re on your website, and most likely to act.
         </AccordionPanel>
        </AccordionItem>
       </Item>

       <Item>
        <AccordionItem>
         <AccordionButton>
          <ItemTitle>Conver</ItemTitle>
          <AccordionIcon />
         </AccordionButton>
         <AccordionPanel pb={4}>
          Shorten the time between intent and purchase by connecting with
          visitors when they’re on your website, and most likely to act.
         </AccordionPanel>
        </AccordionItem>
       </Item>
      </Accordion>
     </List>

     <div style={{ display: 'flex', margin: '0 auto' }}>
      <img src={solutionImage} alt="Solutions" />
     </div>
    </Post>
   </Container>
  </Section>
 );
};

export default Solutions;
