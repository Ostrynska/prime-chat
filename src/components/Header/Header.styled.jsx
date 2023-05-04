import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const LogoLink = styled.a`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 40px;
 line-height: 1.3;
 color: ${lightTheme.colors.headerColor};

 margin-left: 10px;
`;

export const HeaderWrap = styled.header`
 margin: 42px 0 81px 0;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
`;

export const HeaderNav = styled.nav`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
`;

export const MenuItem = styled.li``;

export const MenuList = styled.ul`
    display: flex:
    list-style: none;
    gap: 45px;
    margin-left: 263px;
`;

export const MenuLink = styled.a`
 text-decoration: none;
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 18px;
 line-height: 1.61;
 text-transform: capitalize;
 transition: ${lightTheme.transitions.main};

 color: ${lightTheme.colors.headerColor};
 &:hover {
  color: ${lightTheme.colors.primaryColor};
  font-weight: 500;
 }
`;
