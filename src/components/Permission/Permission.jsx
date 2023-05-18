import {
 PermissionWrap,
 Section,
 Wrap,
 Title,
 Text,
 TitleSpan,
 List,
 ListItem,
 Check,
 CheckText,
} from './Permission.styled';
import { PreTitle } from '../PreTitle/PreTitle';
import { Container } from '../Container/Conteiner';

import permissionImage from '../../images/permission/permissionImage@1x.png';
import permissionImageRetina from '../../images/permission/permissionImage@2x.png';

const Permission = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section>
   <Container>
    <Wrap>
     <PreTitle variant="secondary" text={'Permission'} />
     <Title>
      User Role & <TitleSpan>Permissions</TitleSpan>
     </Title>
     <Text>
      Increase engagement and make buying easy with our stylish live chat
      widget. Provide personalized real-time support customers and visited
      pages.
     </Text>
    </Wrap>
    <List>
     <ListItem>
      <Check />
      <CheckText>Edit Messenger intro and localization</CheckText>
     </ListItem>
     <ListItem>
      <Check />
      <CheckText>Edit teammate permissions</CheckText>
     </ListItem>
     <ListItem>
      <Check />
      <CheckText>Can access people, companies, and account lists</CheckText>
     </ListItem>
    </List>

    <img
     src={isRetina ? permissionImageRetina : permissionImage}
     alt="Permission"
     width={877.03}
     height={692}
     style={{
      position: 'absolute',
      top: '65px',
      right: '10px',
     }}
    />
   </Container>
  </Section>
 );
};

export default Permission;
