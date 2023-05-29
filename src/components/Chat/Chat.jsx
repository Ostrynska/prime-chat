import { useState } from 'react';
import { Container } from '../Container/Conteiner';

import { Section, Wrapper, NavWrap, ChatWrap, List, Item } from './Chat.styled';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Wallet } from '../../images/chat/wallet.svg';
import { ReactComponent as Swap } from '../../images/chat/swap.svg';
import { ReactComponent as Chart } from '../../images/chat/chart.svg';
import { ReactComponent as ChatS } from '../../images/chat/chat.svg';
import { ReactComponent as Paper } from '../../images/chat/paper.svg';

import UnderConstruction from '../UnderConstruction/UnderConstruction';
import PrimeChat from './PrimeChat';

const Chat = () => {
 const [selectedItem, setSelectedItem] = useState(null);

 const handleItemClick = item => {
  setSelectedItem(item);
 };

 return (
  <Section>
   <Container>
    <Wrapper>
     <NavWrap>
      <Logo onClick={() => handleItemClick('prime-chat')} />
      <List>
       <Item onClick={() => handleItemClick('construction')}>
        <Wallet />
       </Item>
       <Item onClick={() => handleItemClick('construction')}>
        <Swap />
       </Item>
       <Item onClick={() => handleItemClick('construction')}>
        <Chart />
       </Item>
       <Item onClick={() => handleItemClick('construction')}>
        <ChatS />
       </Item>
       <Item onClick={() => handleItemClick('construction')}>
        <Paper />
       </Item>
      </List>
     </NavWrap>
     <ChatWrap>
      {selectedItem === 'construction' ? <UnderConstruction /> : <PrimeChat />}
     </ChatWrap>
    </Wrapper>
   </Container>
  </Section>
 );
};

export default Chat;
