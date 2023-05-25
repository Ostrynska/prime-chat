import io from 'socket.io-client';
import { useState, useEffect } from 'react';

import { Container } from '../Container/Conteiner';

import {
 Section,
 Wrapper,
 NavWrap,
 ChatWrap,
 List,
 Item,
 TitleWrap,
 ChatTitle,
 ChatPreTitle,
 Form,
 OnlineUser,
 OnlineUserList,
 OnlineUserItem,
 InputForm,
 InputFormWrap,
 ChatBot,
 InputName,
 InputText,
 BtnForm,
} from './Chat.styled';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Wallet } from '../../images/chat/wallet.svg';
import { ReactComponent as Swap } from '../../images/chat/swap.svg';
import { ReactComponent as Chart } from '../../images/chat/chart.svg';
import { ReactComponent as ChatS } from '../../images/chat/chat.svg';
import { ReactComponent as Paper } from '../../images/chat/paper.svg';

const socket = {
 current: io('https://chat-back-socket.onrender.com'),
};

const Chat = () => {
 const [onlineUsers, setOnlineUsers] = useState(0);
 const [message, setMessage] = useState('');
 const [messageList, setMessageList] = useState([]);
 const [user, setUser] = useState('');

 console.log(message);
 console.log(user);

 useEffect(() => {
  socket.current.on('changeOnline', size => {
   setOnlineUsers(size);
  });
 }, []);

 useEffect(() => {
  socket.current.on('alertMessage', data => {
   setMessageList([...messageList, data]);
  });
  socket.current.on('changeOnline', size => {
   setOnlineUsers(size);
  });
 }, [messageList]);

 const handleSubmit = e => {
  e.preventDefault();
  socket.current.emit('addUser', { name: user });
  socket.current.on('messageList', data => {
   setMessageList(data);
  });

  socket.current.emit('newMessage', { text: message, name: user });
  socket.current.on('alertMessage', data => {
   setMessageList([...messageList, data]);
  });
 };
 return (
  <Section>
   <Container>
    <Wrapper>
     <NavWrap>
      <Logo />
      <List>
       <Item>
        <Wallet />
       </Item>
       <Item>
        <Swap />
       </Item>
       <Item>
        <Chart />
       </Item>
       <Item>
        <ChatS />
       </Item>
       <Item>
        <Paper />
       </Item>
      </List>
     </NavWrap>
     <ChatWrap>
      <TitleWrap>
       <ChatTitle>
        Our <span>Chat</span> List
       </ChatTitle>
       <ChatPreTitle>
        Users online: <span>{onlineUsers}</span>
       </ChatPreTitle>
      </TitleWrap>
      <Form>
       <OnlineUser>
        <OnlineUserList>
         <OnlineUserItem>Name</OnlineUserItem>
        </OnlineUserList>
       </OnlineUser>
       <div>
        <InputFormWrap>
         <InputForm>
          <InputName
           type="text"
           value={user}
           placeholder="Enter your name"
           onChange={e => {
            setUser(e.currentTarget.value);
           }}
          />
          <InputText
           type="text"
           value={message}
           placeholder="Enter your message"
           onChange={e => {
            setMessage(e.currentTarget.value);
           }}
          />
          <BtnForm onClick={handleSubmit}>SUBMIT</BtnForm>
         </InputForm>
        </InputFormWrap>
        <ChatBot>
         <ul>
          {messageList.map(item => (
           <li key={item._id}>
            <span>{item.name}</span>:<span>{item.text}</span>
           </li>
          ))}
         </ul>
        </ChatBot>
       </div>
      </Form>
     </ChatWrap>
    </Wrapper>
   </Container>
  </Section>
 );
};

export default Chat;
