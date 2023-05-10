import { PrimaryButton, SecondaryButton } from './Button.styled';

export const Button = ({ text, variant = 'primary' }) => {
 return variant === 'secondary' ? (
  <SecondaryButton>{text}</SecondaryButton>
 ) : (
  <PrimaryButton>{text}</PrimaryButton>
 );
};
