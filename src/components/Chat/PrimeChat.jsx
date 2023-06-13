import io from 'socket.io-client';
import { useState, useEffect } from 'react';

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { AvatarGenerator } from 'random-avatar-generator';
import toast from 'react-hot-toast';

import { ReactComponent as UserList } from '../../images/chat/user-list.svg';
import { ReactComponent as Exit } from '../../images/chat/exit.svg';

import {
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
 OnlineUserItemName,
 ChatBoxList,
 ChatBoxItem,
 ChatDate,
 ChatText,
 ChatUser,
 ChatMessage,
 BtnName,
 BtnNameIcon,
 WelcomeText,
 ExitForm,
 Online,
} from './Chat.styled';

const socket = {
 current: io('https://chat-back-socket.onrender.com'),
};

const PrimeChat = () => {
 const [onlineUsers, setOnlineUsers] = useState(0);
 const [user, setUser] = useState('');
 const [message, setMessage] = useState('');
 const [messageList, setMessageList] = useState([]);
 const [usersList, setUsersList] = useState([]);
 const [isNameSubmitted, setIsNameSubmitted] = useState(false);

 const generator = new AvatarGenerator();
 const d = new Date();

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

  if (user === '') {
   toast.error('User name is required. Please enter your name');
   return;
  }

  if (message === '') {
   toast.error('We cannot send empty field. Please enter the message');
   return;
  }

  let today = d.toLocaleString();

  socket.current.emit('newMessage', { text: message, name: user, date: today });
  socket.current.on('alertMessage', data => {
   setMessageList([...messageList, data]);
  });

  setMessage('');
 };

 const addUser = name => {
  if (name === '') {
   return;
  }
  const randomAvatar = generator.generateRandomAvatar();
  const newUser = { name, avatar: randomAvatar };
  setUsersList(prevUsersList => [...prevUsersList, newUser]);
 };

 const handleReset = () => {
  setMessage('');
  setUser('');
 };

 const handleNameSubmit = e => {
  e.preventDefault();

  socket.current.emit('addUser', { name: user });
  socket.current.on('messageList', data => {
   setMessageList(data);
  });

  addUser(user);
  if (user === '') {
   toast.error('User name is required. Please enter your name');
   return;
  }
  setIsNameSubmitted(true);
 };

 return (
  <>
   <TitleWrap>
    <ChatTitle>
     Our <span>Chat</span> List
    </ChatTitle>
    <ChatPreTitle>
     Users online: <span>{onlineUsers}</span>
    </ChatPreTitle>
   </TitleWrap>
   <Form>
    {usersList.length === 0 ? (
     <UserList width={296} height={431} />
    ) : (
     <PerfectScrollbar>
      <OnlineUser>
       <OnlineUserList>
        {usersList.map((user, id) => {
         return (
          <OnlineUserItem key={id}>
           <ItemWrapper>
            <img src={user.avatar} alt="User Avatar" width={50} />
            <Online />
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
     </PerfectScrollbar>
    )}

    <div>
     {isNameSubmitted === true ? (
      <WelcomeText>
       Welcome, <span>{user}</span>!
      </WelcomeText>
     ) : (
      <InputFormWrap>
       <InputName
        type="text"
        placeholder="Enter your name"
        value={user}
        onChange={e => {
         setUser(e.currentTarget.value);
        }}
       />
       <BtnName onClick={handleNameSubmit}>
        <BtnNameIcon />
       </BtnName>
      </InputFormWrap>
     )}

     <PerfectScrollbar>
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
     </PerfectScrollbar>

     <InputForm>
      <form>
       <InputText
        type="text"
        value={message}
        placeholder="Enter your message"
        onChange={e => {
         setMessage(e.currentTarget.value);
        }}
       />
       <BtnForm onClick={handleSubmit}>SEND</BtnForm>
       {isNameSubmitted === true && (
        <ExitForm onClick={handleReset}>
         <Exit />
        </ExitForm>
       )}
      </form>
     </InputForm>
    </div>
   </Form>
  </>
 );
};

export default PrimeChat;
