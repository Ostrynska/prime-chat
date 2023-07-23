import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

import { RxCross1 } from 'react-icons/rx';

import { Container } from '../Container/Conteiner';
import {
 Section,
 Title,
 TitleContent,
 TitleSpan,
 Input,
 Button,
 Form,
 Message,
 MessageStatus,
 MessageStatusText,
 ModalCloseButton,
} from './Subscribe.styled';

// Встановіть елемент додатка, який буде ідентифікуватися як головний контейнер додатка
Modal.setAppElement('#root');

const emailConfig = {
 // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
 YOUR_SERVICE_ID: 'service_rc92o14',
 YOUR_TEMPLATE_ID: 'template_y4ac5yv',
 YOUR_USER_ID: 'D6nz0LmQ7AsksAHWn',
};

const customModalStyles = {
 content: {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  padding: '40px',
 },
 overlay: {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '100',
 },
};

const Subscribe = () => {
 const [formData, setFormdata] = useState({
  email: '',
  loading: false,
  modalOpen: false,
 });
 const handleSubmit = e => {
  e.preventDefault();
  setFormdata({ ...formData, loading: true });

  const templateParams = {
   user_email: formData.email,
  };

  emailjs
   .send(
    emailConfig.YOUR_SERVICE_ID,
    emailConfig.YOUR_TEMPLATE_ID,
    templateParams,
    emailConfig.YOUR_USER_ID
   )
   .then(
    result => {
     setFormdata({
      ...formData,
      loading: false,
      modalOpen: true,
      alertmessage: (
       <Message>
        <MessageStatus $success>Message delivered! ✅</MessageStatus>
        <MessageStatusText>
         Thank you! Your message was sent successfully.
        </MessageStatusText>
       </Message>
      ),
      variant: 'success',
     });
    },
    error => {
     setFormdata({
      ...formData,
      modalOpen: true,
      alertmessage: (
       <Message>
        <MessageStatus $error>Message not delivered! 💥</MessageStatus>
        <MessageStatusText>
         Sorry. Your message was unable to send.
        </MessageStatusText>
       </Message>
      ),
      variant: 'danger',
     });
    }
   );
  setFormdata({ email: '' });
 };

 const closeModal = () => {
  setFormdata({
   ...formData,
   modalOpen: false,
   email: '',
  });
 };

 return (
  <Section id="subscribes">
   <Modal
    isOpen={formData.modalOpen}
    onRequestClose={closeModal}
    style={customModalStyles}
    shouldCloseOnOverlayClick={true}
    contentLabel="Message Modal"
    appElement={document.getElementById('root')}
   >
    <div>{formData.alertmessage}</div>
    <ModalCloseButton onClick={closeModal}>
     <RxCross1 />
    </ModalCloseButton>
   </Modal>
   <Container>
    <TitleContent>
     <Title>
      Build stronger with
      <TitleSpan> Customer relationships</TitleSpan> Primchat
     </Title>
     <Form onSubmit={handleSubmit}>
      <Input
       placeholder="Enter your email"
       name="user_email"
       value={formData.email}
       onChange={e => setFormdata({ ...formData, email: e.target.value })}
      />
      <Button type="submit">{formData.loading ? 'Sending...' : 'Send'}</Button>
     </Form>
    </TitleContent>
   </Container>
  </Section>
 );
};

export default Subscribe;
