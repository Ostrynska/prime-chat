import {
 PrimaryButton,
 SecondaryButton,
 SecondaryButtonIcon,
} from './Button.styled';

import { ReactComponent as Icon } from '../../images/solutions/btnIcon.svg';

export const Button = ({ text, variant = 'primary' }) => {
 return variant === 'secondary' ? (
  <SecondaryButton>{text}</SecondaryButton>
 ) : (
  <PrimaryButton>{text}</PrimaryButton>
 );
};

export const ButtonWithIcon = ({ text, variant = 'primary' }) => {
 return variant === 'icon' ? (
  <SecondaryButtonIcon>
   {text}
   <Icon style={{ marginLeft: '11px' }} />
  </SecondaryButtonIcon>
 ) : (
  <PrimaryButton>{text}</PrimaryButton>
 );
};
