import { useEffect } from 'react';

import { RxCross1 } from 'react-icons/rx';

import {
 ModalOverlay,
 ModalBody,
 ModalContainer,
 ModalCloseButton,
 Title,
 Input,
 EmailIcon,
 PasswordIcon,
 Button,
 InputWrap,
 CheckboxLabel,
 Text,
 TextLabel,
} from './Modal.styled';

export const ModalWindow = ({ onClose }) => {
 useEffect(() => {
  const handleKeyDown = e => {
   if (e.code === 'Escape') {
    onClose();
   }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => {
   window.removeEventListener('keydown', handleKeyDown);
  };
 }, [onClose]);

 const handleOverlayClick = e => {
  if (e.currentTarget === e.target) {
   onClose();
  }
 };

 return (
  <>
   <ModalOverlay onClick={handleOverlayClick}>
    <ModalBody>
     <ModalContainer>
      <ModalCloseButton
       onClick={() => {
        onClose();
       }}
      >
       <RxCross1 />
      </ModalCloseButton>
      <Title>Sign In</Title>
      <form>
       <EmailIcon />
       <Input placeholder="Email" />
       <PasswordIcon />
       <Input placeholder="Password" />
       <InputWrap>
        <div>
         <input type="checkbox" id="remember" name="remember" />
         <CheckboxLabel for="remember">Remember me</CheckboxLabel>
        </div>
        <TextLabel>Forgot password?</TextLabel>
       </InputWrap>
       <Button type="submit">Sign up</Button>
      </form>
      <Text>
       Don`t have an account? <span>Sign up now</span>
      </Text>
     </ModalContainer>
    </ModalBody>
   </ModalOverlay>
  </>
 );
};
