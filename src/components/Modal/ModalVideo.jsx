import { useEffect } from 'react';

import { ModalOverlay, Video } from './Modal.styled';

export const ModalVideoWindow = ({ onClose }) => {
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
  <ModalOverlay onClick={handleOverlayClick}>
   <Video
    src="https://www.youtube.com/embed/vDMyIZ2nsS0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
   ></Video>
  </ModalOverlay>
 );
};
