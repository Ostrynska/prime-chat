import { Container } from '../Container/Conteiner';
import {
 Section,
 Title,
 TitleContent,
 TitleSpan,
 Input,
 Button,
 Form,
} from './Subscribe.styled';

const Subscribe = () => {
 return (
  <Section id="subscribes">
   <Container>
    <TitleContent>
     <Title>
      Build stronger with
      <TitleSpan> Customer relationships</TitleSpan> Primchat
     </Title>
     <Form>
      <Input placeholder="Enter your email" />
      <Button>Submit</Button>
     </Form>
    </TitleContent>
   </Container>
  </Section>
 );
};

export default Subscribe;
