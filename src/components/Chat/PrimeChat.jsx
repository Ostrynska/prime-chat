import io from 'socket.io-client';
import { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
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
} from './Chat.styled';

const socket = {
 current: io('https://chat-back-socket.onrender.com'),
};

const PrimeChat = () => {
 const [onlineUsers, setOnlineUsers] = useState(0);
 const [onlineUsersList, setOnlineUsersList] = useState([]);
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
    {
     name: newUser.name,
     text: toast(`User ${newUser.name} joined the chat.`, {
      icon: '🙋‍♀️',
     }),
    },
   ]);
  });

  socket.current.on('userLeft', userLeft => {
   setUsersList(prevUsersList =>
    prevUsersList.filter(user => user.name !== userLeft.name)
   );
   setMessageList(prevMessageList => [
    ...prevMessageList,
    {
     name: userLeft.name,
     text: toast(`User ${userLeft.name} left the chat`, {
      icon: '👋',
     }),
    },
   ]);
  });

  return () => {
   socket.current.off('changeOnline');
   socket.current.off('chatHistory');
   socket.current.off('userJoined');
   socket.current.off('userLeft');
   socket.current.off('alertMessage');
  };
 }, []);

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

  //   handleNameSubmit(user);

  socket.current.emit('newMessage', { text: message, name: user, date: today });

  setMessageList(prevMessageList => [
   ...prevMessageList,
   { name: user, text: message, date: today },
  ]);

  if (message === '') {
   return toast.error("This didn't work.");
  }

  setMessage('');
 };

 const addUser = name => {
  if (name === '') {
   return;
  }
  const randomAvatar = generator.generateRandomAvatar();
  const newUser = { name, avatar: randomAvatar };
  setUsersList(prevUsersList => [...prevUsersList, newUser]);

  //   setMessageList(prevMessageList => [...prevMessageList]);
  //   localStorage.setItem('usersList', JSON.stringify([...usersList, newUser]));
 };

 const handleReset = () => {
  setMessage('');
  setUser('');
  onlineUsers(0);
  onlineUsersList([]);
 };

 const handleNameSubmit = () => {
  socket.current.emit('addUser', { name: user });

  addUser(user);
  if (user === '') {
   toast.error('User name is required. Please enter your name');
   return;
  }
  setIsNameSubmitted(true);
 };

 const isOnline = onlineUsersList.includes(user.name);
 console.log('isOnline', isOnline);

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
     <Scrollbars style={{ height: '100%', width: 308 }}>
      <OnlineUser>
       <OnlineUserList>
        {usersList.map((user, id) => {
         const isOnline = onlineUsersList.includes(user.name);
         return (
          <OnlineUserItem key={id} online={isOnline}>
           <ItemWrapper>
            <img src={user.avatar} alt="User Avatar" width={50} />
            {isOnline === true ? <span>Online</span> : <span>Ofline</span>}
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
    )}

    <div>
     {isNameSubmitted === true ? (
      <WelcomeText>
       Welcome, <span>{user}</span>!
      </WelcomeText>
     ) : (
      <InputFormWrap>
       {/* <InputForm> */}
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
       {/* </InputForm> */}
      </InputFormWrap>
     )}

     <Scrollbars style={{ height: 650, width: '100%' }}>
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
     </Scrollbars>

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
