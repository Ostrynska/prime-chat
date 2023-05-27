import io from 'socket.io-client';
import { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { AvatarGenerator } from 'random-avatar-generator';
import toast from 'react-hot-toast';

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
 ItemWrapper,
 ResetWrap,
 ResetForm,
 OnlineUserItemName,
 ChatBoxList,
 ChatBoxItem,
 ChatDate,
 ChatText,
 ChatUser,
 ChatMessage,
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
 const [onlineUsersList, setOnlineUsersList] = useState([]);
 const [user, setUser] = useState('');
 const [message, setMessage] = useState('');
 const [messageList, setMessageList] = useState(
  JSON.parse(localStorage.getItem('messageList')) || []
 );
 const [usersList, setUsersList] = useState(
  JSON.parse(localStorage.getItem('usersList')) || []
 );

 const generator = new AvatarGenerator();
 const d = new Date();

 useEffect(() => {
  socket.current.on('changeOnline', size => {
   setOnlineUsers(size);
  });

  socket.current.on('chatHistory', data => {
   setMessageList(data);
  });

  socket.current.on('onlineUsers', data => {
   setOnlineUsersList(data);
  });

  socket.current.on('userJoined', newUser => {
   setUsersList(prevUsersList => [...prevUsersList, newUser]);
   setMessageList(prevMessageList => [
    ...prevMessageList,
    { name: newUser.name, text: `User ${newUser.name} joined the chat.` },
   ]);
  });

  socket.current.on('userLeft', userLeft => {
   setUsersList(prevUsersList =>
    prevUsersList.filter(user => user.name !== userLeft.name)
   );
   setMessageList(prevMessageList => [
    ...prevMessageList,
    { name: userLeft.name, text: `User ${userLeft.name} left the chat.` },
   ]);
  });

  return () => {
   socket.current.off('changeOnline');
   socket.current.off('chatHistory');
   socket.current.off('onlineUsers');
   socket.current.off('userJoined');
   socket.current.off('userLeft');
   socket.current.off('alertMessage');
  };
 }, []);

 const handleSubmit = e => {
  e.preventDefault();

  let today = d.toLocaleString();

  socket.current.emit('addUser', { name: user });

  socket.current.emit('newMessage', { text: message, name: user, date: today });

  addUser(user);

  setMessageList(prevMessageList => [
   ...prevMessageList,
   { name: user, text: message, date: today },
  ]);

  if (message === '' || user === '') {
   return toast.error("This didn't work.");
  }

  setMessage('');
  //   setUser('');
 };

 const addUser = name => {
  const randomAvatar = generator.generateRandomAvatar();
  const newUser = { name, avatar: randomAvatar };
  setUsersList(prevUsersList => [...prevUsersList, newUser]);

  setMessageList(prevMessageList => [...prevMessageList]);
  localStorage.setItem('usersList', JSON.stringify([...usersList, newUser]));
 };

 const handleReset = () => {
  setMessage('');
  setUser('');
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
       <Scrollbars style={{ height: '100%', width: 308 }}>
        <OnlineUser>
         <OnlineUserList>
          {usersList.map((user, id) => {
           const isOnline = onlineUsersList.includes(user.name);
           return (
            <OnlineUserItem key={id} online={isOnline}>
             <ItemWrapper>
              <img src={user.avatar} alt="User Avatar" width={50} />
              {/* {isOnline === true ? <span>Online</span> : <span>Ofline</span>} */}
              <div
               style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
               }}
              >
               <OnlineUserItemName>{user.name}</OnlineUserItemName>
              </div>
             </ItemWrapper>
            </OnlineUserItem>
           );
          })}
         </OnlineUserList>
        </OnlineUser>
       </Scrollbars>
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
          <ResetWrap>
           <ResetForm onClick={handleReset} />
          </ResetWrap>
         </InputForm>
        </InputFormWrap>
        <ChatBot>
         <ChatBoxList>
          {messageList.map((item, _id) => {
           return (
            <ChatBoxItem key={item._id}>
             <ChatMessage>
              <ChatUser>{item.name}</ChatUser>
              <ChatText>{item.text}</ChatText>
             </ChatMessage>
             <ChatDate>{item.date}</ChatDate>
            </ChatBoxItem>
           );
          })}
         </ChatBoxList>
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
