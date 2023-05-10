import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import { IoIosCheckmarkCircle } from 'react-icons/io';

export const Section = styled.section`
 padding-bottom: 135px;
`;

export const Content = styled.div`
 width: 632px;
 padding-top: 53px;
 padding-bottom: 53px;
`;

export const Title = styled.h2`
 margin-bottom: 20px;
 width: 474px;

 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;
 /* or 53px */

 text-transform: capitalize;

 color: #303030;
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Post = styled.p`
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;

export const PostWrap = styled.div`
 margin-bottom: 27px;
`;

export const List = styled.ul`
 margin-bottom: 62px;

 display: flex;
 flex-direction: column;
 gap: 17px;
`;

export const ListItem = styled.li`
 display: flex;
 padding: 12.5px 0 13.5px 15px;

 height: 54px;

 ${p =>
  p.color &&
  `
    background: ${lightTheme.colors[p.color]};
  `}

 border-radius: 44px;
`;

export const Check = styled(IoIosCheckmarkCircle)`
 margin-right: 12px;
 width: 28px;
 height: 28px;

 ${p =>
  p.color &&
  `
    color: ${lightTheme.colors[p.color]};
  `}
`;

export const CheckText = styled.p`
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;
 /* identical to box height, or 29px */

 text-transform: capitalize;

 ${p =>
  p.color &&
  `
    color: ${lightTheme.colors[p.color]};
  `}
`;
