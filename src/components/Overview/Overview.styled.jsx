import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
`;

export const TitleContent = styled.div`
 display: flex;
`;
export const Content = styled.div`
 max-width: 466px;
`;

export const Title = styled.h2`
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

export const PostTitle = styled.div`
 max-width: 586px;
 margin-left: auto;
 display: flex;
 align-items: center;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;

export const Platform = styled.ul`
 max-width: 1400px;
 margin-top: 48px;

 display: grid;
 grid-template-columns: 920px 442px;
 gap: 36px;
`;
export const PlatformRvs = styled.ul`
 margin-top: 32px;
 max-width: 1400px;
 display: grid;
 grid-template-columns: 442px 920px;
 gap: 36px;
`;
export const PlatformItem = styled.li`
 position: relative;
 background: #f8f8f8;
 padding: 55px 44px 75px 44px;
 border-radius: 30px;
`;

export const AltText = styled.div`
 position: absolute;
 top: 95px;
 left: 85px;

 background: rgba(237, 237, 255, 0.5);
 border: 1px solid #eaeaf7;
 backdrop-filter: blur(5px);
 border-radius: 10px;
 padding: 12px 16px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 133.2%;
 /* identical to box height, or 24px */
 color: #625ffb;
`;

export const PlatformTitle = styled.h3`
 margin-top: 53px;
 margin-bottom: 10px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;
 /* identical to box height, or 40px */

 text-transform: capitalize;
 color: #303030;
`;

export const PlatformText = styled.p`
 max-width: 422px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;
export const MessengerImage = styled.img`
 position: absolute;
 top: 0px;
 left: -1px;
`;

export const AppImage = styled.img`
 width: 920px;
 height: 409px;
 position: absolute;
 top: -5px;
 ${'' /* right: 1px; */}
`;
