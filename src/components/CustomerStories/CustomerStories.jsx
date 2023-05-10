import { PreTitle } from '../PreTitle/PreTitle';
import {
 SpanTitle,
 Title,
 Wrapper,
 Section,
 //  HomePageImage,
} from './CustomerStories.styled';

const CustomerStories = () => {
 return (
  <Section>
   <Wrapper>
    <PreTitle variant="primary" text={'Testimonials'} />
    <Title>
     About Customer <SpanTitle>stories</SpanTitle>
    </Title>
   </Wrapper>
  </Section>
 );
};

export default CustomerStories;
