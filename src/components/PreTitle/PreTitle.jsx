import { TitleWrap, TitleWrapText } from './PreTitle.styled';

export const PreTitle = ({ text, variant = 'primary' }) => {
 return variant === 'secondary' ? (
  <TitleWrap>
   <TitleWrapText>{text}</TitleWrapText>
  </TitleWrap>
 ) : (
  <TitleWrap>
   <TitleWrapText>{text}</TitleWrapText>
  </TitleWrap>
 );
};
