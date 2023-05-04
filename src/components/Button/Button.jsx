import {
 PrimaryButton,
 SecondaryButton,
 SecondaryButtonS,
 PrimaryButtonS,
} from './Button.styled';

export const Button = ({ text, variant = 'primary' }) => {
 return variant === 'secondary' ? (
  <SecondaryButton>{text}</SecondaryButton>
 ) : (
  <PrimaryButton>{text}</PrimaryButton>
 );
};

export const ButtonS = ({ text, variant = 'primary' }) => {
 return variant === 'secondary' ? (
  <SecondaryButtonS>{text}</SecondaryButtonS>
 ) : (
  <PrimaryButtonS>{text}</PrimaryButtonS>
 );
};
