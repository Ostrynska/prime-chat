import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';
import {
 Accordion,
 AccordionItem,
 AccordionPanel,
 AccordionIcon,
 AccordionButton,
} from '@chakra-ui/react';

import {
 IoIosArrowDroprightCircle,
 IoIosArrowDropdownCircle,
} from 'react-icons/io';

export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
`;

export const TitleContent = styled.div`
 display: flex;
`;
export const Content = styled.div`
 max-width: 659px;
`;

export const Title = styled.h2`
 font-family: 'Open Sans', sans-serif;
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

export const PostTitle = styled.div`
 display: flex;
 margin-left: auto;
 align-items: flex-end;
`;

export const Post = styled.div`
 display: flex;
 margin-top: 53px;
`;

export const List = styled(Accordion)`
 display: flex;
 flex-direction: column;
 gap: 22px;
 margin-right: 40px;
`;

export const Item = styled(AccordionItem)`
 padding: 47px 50px;
 width: 662px;

 background: #f3f3f3;
 border-radius: 30px;
`;

export const ItemTitle = styled.h3`
 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;
 /* identical to box height, or 40px */

 text-transform: capitalize;
 color: #303030;
`;

export const ItemText = styled(AccordionPanel)`
 margin-top: 10px;
 max-width: 534px;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;

export const Button = styled(AccordionButton)`
 display: flex;
 margin-left: auto;
 align-items: flex-end;
`;

export const Icon = styled(AccordionIcon)`
 display: flex;
 margin-left: auto;
 align-items: flex-end;
 color: #625ffb;
`;

// export const DropdownIcon = styled(IoIosArrowDropdownCircle)`
//  color: #625ffb;
// `;

// export const DroprighIcon = styled(IoIosArrowDroprightCircle)`
//  color: #303030;
// `;
