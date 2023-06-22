import { useState } from 'react';
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
 ItemText,
 Button,
 Icon,
 Image,
 ButtonWrap,
} from './Solutions.styled';
import { PreTitle } from '../PreTitle/PreTitle';
import { ButtonWithIcon } from '../Button/Button';
import { ModalVideoWindow } from '../Modal/ModalVideo';

import solutionImage from '../../images/solutions/solutionImage@1x.png';
import solutionImageRetina from '../../images/solutions/solutionImage@2x.png';

const Solutions = () => {
 const [showModal, setShowModal] = useState(false);
 const isRetina = window.devicePixelRatio > 1;

 const openModal = () => {
  setShowModal(true);
 };

 const closeModal = () => {
  setShowModal(false);
 };

 return (
  <Section id="solution">
   <Container>
    <TitleContent>
     <Content>
      <PreTitle variant="primary" text={'Solutions'} style={{ width: 155 }} />
      <Title>
       Give your customer experience a <TitleSpan>human touch</TitleSpan>
      </Title>
     </Content>
     <PostTitle>
      <ButtonWrap to={'/blog'}>
       <ButtonWithIcon variant="primary" text={'Chat With Us'} />
      </ButtonWrap>
      <div onClick={openModal}>
       <ButtonWithIcon variant="icon" text={'Watch Videos'} />
      </div>
      {showModal && <ModalVideoWindow onClose={closeModal} />}
     </PostTitle>
    </TitleContent>
    <Post>
     <List allowToggle>
      <Item>
       <Button>
        <ItemTitle>Support</ItemTitle>
        <Icon />
       </Button>
       <ItemText>
        Shorten the time between intent and purchase by connecting with visitors
        when they’re on your website, and most likely to act.
       </ItemText>
      </Item>

      <Item>
       <Button>
        <ItemTitle>Engage</ItemTitle>
        <Icon />
       </Button>
       <ItemText>
        Shorten the time between intent and purchase by connecting with visitors
        when they’re on your website, and most likely to act.
       </ItemText>
      </Item>

      <Item>
       <Button>
        <ItemTitle>Conver</ItemTitle>
        <Icon />
       </Button>
       <ItemText>
        Shorten the time between intent and purchase by connecting with visitors
        when they’re on your website, and most likely to act.
       </ItemText>
      </Item>
     </List>
     <Image
      src={isRetina ? solutionImageRetina : solutionImage}
      alt="Solutions"
     />
    </Post>
   </Container>
  </Section>
 );
};

export default Solutions;
