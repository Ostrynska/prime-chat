import { Container } from '../Container/Conteiner';
import { ReactSVG } from 'react-svg';
import {
 Section,
 Content,
 TitleContent,
 Title,
 TitleSpan,
 PostTitle,
 Platform,
 PlatformRvs,
 PlatformItem,
 AltText,
 PlatformTitle,
 PlatformText,
 MessengerImage,
 AppImage,
} from './Overview.styled';
import { PreTitle } from '../PreTitle/PreTitle';

import bussinessMessengerLogo from '../../images/overview/bussiness-messenger.svg';
import managementToolLogo from '../../images/overview/management-tool.svg';
import customerPlatformLogo from '../../images/overview/customer-platform.svg';
import appLogo from '../../images/overview/app.svg';

import messenger from '../../images/overview/welcome-image@1x.png';
import messengerRetina from '../../images/overview/welcome-image@2x.png';
import app from '../../images/overview/app-image@1x.png';
import appRetina from '../../images/overview/app-image@2x.png';

const Overview = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section id="platform">
   <Container>
    <TitleContent>
     <Content>
      <PreTitle variant="primary" text={'Platform'} style={{ width: 155 }} />
      <Title>
       Get an overview of the <TitleSpan>Primchat</TitleSpan> platform
      </Title>
     </Content>
     <PostTitle>
      Provide the best, most intuitive support across all channels. Proactively
      understand customer needs to serve excellence the first time.
     </PostTitle>
    </TitleContent>
    <Platform>
     <PlatformItem>
      <ReactSVG src={bussinessMessengerLogo} />
      <AltText>Powerful Flexible</AltText>
      <PlatformTitle>Business Messenger</PlatformTitle>
      <PlatformText>
       Provide the best, most intuitive support across all channels. Proactively
       standerd customer needs serve excellence
      </PlatformText>
      <MessengerImage
       src={isRetina ? messengerRetina : messenger}
       alt="Wellcome"
       width={920}
      />
     </PlatformItem>
     <PlatformItem>
      <ReactSVG src={managementToolLogo} />
      <AltText>Smart tools</AltText>
      <PlatformTitle>Management Tool</PlatformTitle>
      <PlatformText>
       Provide the best, most intuitive support across all channels from.
       Proactively.
      </PlatformText>
     </PlatformItem>
    </Platform>
    <PlatformRvs>
     <PlatformItem>
      <ReactSVG src={customerPlatformLogo} />
      <AltText>Customer conversation</AltText>
      <PlatformTitle>Customer Platform</PlatformTitle>
      <PlatformText>
       Provide the best, most intuitive support across all chan Proactively
       standerd customer.
      </PlatformText>
     </PlatformItem>
     <PlatformItem>
      <ReactSVG src={appLogo} />
      <AltText>Integration</AltText>
      <PlatformTitle>Apps & Integrations</PlatformTitle>
      <PlatformText>
       Provide the best, most intuitive support across all channels. Proactively
       standerd customer needs serve excellence.
      </PlatformText>
      <AppImage src={isRetina ? appRetina : app} alt="App" width={920} />
     </PlatformItem>
    </PlatformRvs>
   </Container>
  </Section>
 );
};

export default Overview;
