import { useEffect } from 'react';

import { RxCross1 } from 'react-icons/rx';

import {
 ModalOverlay,
 ModalBody,
 ModalContainer,
 ModalCloseButton,
 Title,
 Input,
} from './Modal.styled';

export const ModalWindow = ({ onClose, openModal }) => {
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
       <Input />
      </form>
     </ModalContainer>
    </ModalBody>
   </ModalOverlay>
  </>
 );
};
