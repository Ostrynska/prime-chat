import {
 TitleWrap,
 TitleWrapText,
 TitleWrapSecondary,
 TitleWrapTextSecondary,
} from './PreTitle.styled';

export const PreTitle = ({ text, variant = 'primary' }) => {
 return variant === 'secondary' ? (
  <TitleWrapSecondary>
   <TitleWrapTextSecondary>{text}</TitleWrapTextSecondary>
  </TitleWrapSecondary>
 ) : (
  <TitleWrap>
   <TitleWrapText>{text}</TitleWrapText>
  </TitleWrap>
 );
};
